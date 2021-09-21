import './home.css';
import { useState, useRef } from 'react';
export function CreateUser(props) {

    let name = useRef();
    let email = useRef();
    let city = useRef();
    const saveUser = () => {
        let obj = {

            name: name.current.value,
            email: email.current.value,
            city: city.current.value

        }

        let check = props.userArray.find((user) => {
            return user.email == obj.email;
        });
        if (check) {
            alert("Email Already Exist");
        }
        else {
            props.userArray.push(obj);
            props.setuserArray([...props.userArray]);
        }
    }
    return <>
        <div className="create-user">
            <input ref={name} type="text" placeholder="Name" /><br />
            <input ref={email} type="text" placeholder="Email" /><br />
            <input ref={city} type="text" placeholder="City" /><br />
            <button className="btn2" onClick={saveUser} >Create User</button><br />
        </div>

    </>
}

export function ShowUser(props) {

    return <div>
        <table border="1" className="table">
            <tr>
                <td id="fit">Name</td>
                <td>Email</td>
                <td>City</td>
                <td>Delete Users &nbsp;</td>
            </tr>
            {props.userArray.map((user, index) => {
                return <>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.city}</td>
                        <td>

                            <button className="delete-btn" onClick={() => {
                                props.userArray.splice(index, 1);
                                props.setuserArray([...props.userArray])
                            }} >Delete</button>
                        </td>
                    </tr>
                </>
            })}
        </table>
    </div>

}