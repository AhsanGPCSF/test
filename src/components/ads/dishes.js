import { useState } from "react";
export function Dishs() {



    // let adsArr = [
    // {
    //     pic : "",
    //     name : "",
    //     price : "",
    //     discription : "",
    // },
    // ];

    let [dishes, setDishes] = useState([
        {
            name: "Alo tinde",
            price: "100",
        },
        {
            name: "Alo matar",
            price: "150",
        },
        {
            name: "Alo gobi",
            price: "120",
        }
    ]);
    function addDish() {
        let nDish = prompt("Enter new Dish");
        let nPrice = prompt("Enter Price");
        dishes.push({
            name: nDish, price: nPrice
        });
        setDishes([...dishes]);
        console.log(dishes);
    }

    return <div>
        <table border="1">
            {
                dishes.map((dish, index) => {
                    return <tr>
                        <td>{dish.name}</td>
                        <td>{dish.price}</td>
                        <td><button onClick={
                            () => {
                                dishes.splice(index, 1);
                                setDishes([...dishes]);

                                console.log(dishes);
                            }
                        }>Delete</button></td>
                    </tr>
                })
            }
        </table>
        <button onClick={addDish}>Add items</button>
    </div>
}