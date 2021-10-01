import { useState } from "react";
export function Dish() {


    function Dishh(props, index) {

        return <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td><button onClick={()=>{
                dishes.splice(index,1);
                setDishes([...dishes]);
    
            }}>Delete</button></td>
        </tr>
    }



    let [dishes, setDishes] = useState([
        {
            name: "Biryani",
            price: "250",
        },
        {
            name: "Daal Chana",
            price: "150",
        },
        {
            name: "Mutton",
            price: "550",
        }
    ]);

    function addDish() {

        let NDish = prompt("Enter New Dish");
        let NPrice = prompt("Enter New Dish price");
        dishes.push({ name: NDish, price: NPrice });
        setDishes([...dishes]);

    }


    return <div>
        <table border="1">
            {
                dishes.map((dish) => {
                    return <Dishh name={dish.name} price={dish.price}></Dishh>
                })
            }
        </table>
        <button onClick={addDish}>Add Dish</button>

    </div>
}