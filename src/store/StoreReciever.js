import { connect } from "react-redux";
import store from "./store";
import { useRef } from "react";

// const sendData = () =>{
//     store.dispatch({
//         type:"NAME_CHANGE",
//         name:"Sheikh Ahsan",
//         age: 22,
//         degree: "BSIT",
//     });
// }
// const sendNewName = () =>{
//     store.dispatch({
//         type:"Add_NAME",
//         name: ref1.current.value,
//     });
// }

function Data(props) {
    let ref1 = useRef();
    return <>

        <div>
            <input ref={ref1} type="text" />
            <button onClick={() => {
                store.dispatch({
                    type: "Add_NAME",
                    name: ref1.current.value,
                });
            }}>Add Name</button>
            <button onClick={() => {
                store.dispatch({
                    type: "NAME_CHANGE",
                    name: "Sheikh Ahsan",
                    age: 22,
                    degree: "BSIT",
                });
            }}>Change Data</button>

            <button onClick={()=>{
                store.dispatch({
                    type:"DELETE_DATA",
                    myIndex:0
                })
            }}>Delete Data</button>

        </div>
        <table>{props.updateOneSetion.user.map((a) => {
            return <tr>
                <td>
                    {a.name}
                </td>
                <td>
                    {a.degree}
                </td>
                <td>
                    {a.age}
                </td>
            </tr>
        })}
        </table>
            


        <div>{props.twoSection.degree}</div>



    </>
}
export let Data1 = connect((store) => {
    return store
})(Data)