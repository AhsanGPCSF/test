import { useRef, useState } from 'react';
import './ad.css';

export function Bil() {

    let totalbill = useRef();
    let discount = useRef();
    let grosstotal = useRef();

    //ٹینڈے
    //کریلے 
    let [dishes, setDishes] = useState([
        { dish: " دال ماش ", price: 90, subDish: [] },
        { dish: "دال چنا فرائے", price: 70, subDish: [] },
        {
            dish: "بریانی", price: 180,
            subDish:
                [{ dish: "چکن بریانی", price: 180 },
                { dish: "بیف بریانی", price: 250 },
                { dish: "مٹن بریانی", price: 350 }]
        },
        { dish: "چکن پلائو", price: 150, subDish: [] },
        { dish: "آلو مٹر ", price: 80, subDish: [] },
        { dish: "آلو انڈے", price: 80, subDish: [] },
        { dish: "گوشت", price: 120, subDish: [] },
    ]);

    function calculateBill() {

        let dis = 0;
        let total = 0;
        let grossTotal = 0;
        dishes.forEach(function (dish) {

            if (dish.ordered) {
                total += +dish.price * (dish.quantity || 1);
            }
        });

        totalbill.current.innerText = "Rs." + total + " /-";

        if (total > 700) {

            dis = total * 0.10;

        }
        discount.current.innerText = "Rs." + dis + " /-";
        grossTotal = total - dis;
        grosstotal.current.innerText = "Rs." + grossTotal + " /-";

    }
    function addDish() {

        let NDish = prompt("Enter New Dish");
        let NPrice = prompt("Enter New Dish price");
        dishes.push({ dish: NDish, price: NPrice, subDish : [] });
        setDishes([...dishes]);

    }



    return <div className="Bill-bg">

        <h1> ہوٹل</h1>

        <table border="1" className="dish-list">
            {
                dishes.map(function (dish, index) {
                    return <tr>
                        <td><button className="Bill-b" onClick={() => {
                            dishes.splice(index, 1);
                            setDishes([...dishes]);

                        }}>Delete</button></td>
                        <td>Qty &nbsp;<input className="qty" type="number"
                            onChange={function (evt) {

                                dish.quantity = evt.target.value;

                            }}
                        /></td>
                        <td><input className="checkbox" type="checkbox"
                            onChange={function (evt) {
                                dish.ordered = evt.target.checked;
                            }} /></td>

                        <td>
                            <select className="SelSize" onChange={(evt) => {
                                dish.price = evt.target.value;
                                setDishes([...dishes]);

                            }}>
                                <option value=""></option>                                {
                                    dish.subDish.map((item) => {
                                        return <option className="selectD" value={item.price}>{item.dish}</option>
                                    })
                                }
                            </select>
                        </td>
                        <td>{dish.price}</td>
                        <td>{dish.dish}</td>
                    </tr>
                })

            }

        </table>
        <div>
            <button className="Bill-b" onClick={calculateBill}>Calculate</button>
            <button className="Bill-b bb" onClick={addDish}>Add Dish</button>
        </div>
        <div className="billing-border">
            Total Bill: <span className="bold-bil" ref={totalbill}></span><div></div>
            (Bill &gt; 700 = 10% Discount): <span className="bold-bil" ref={discount}></span><div></div>
            Gross Total Bill: <span className="bold-bil" ref={grosstotal}></span>
        </div>

    </div>
}