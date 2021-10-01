import { useRef } from "react";

export function Add(){

    let OneRef = useRef();
    let TwoRef = useRef();
    let AnsRef = useRef();

    function sum(){
        AnsRef.current.value = +OneRef.current.value + +TwoRef.current.value;
    }
    function sub(){
        AnsRef.current.value = +OneRef.current.value - +TwoRef.current.value;
    }
    function mul(){
        AnsRef.current.value = +OneRef.current.value * +TwoRef.current.value;
    }
    function div(){
        AnsRef.current.value = +OneRef.current.value / +TwoRef.current.value;
    }



    return <div>
        <div id="inputs">
        <input ref={OneRef} type="number" placeholder = "number1" />
        <input ref={TwoRef} type="number" placeholder = "number2" />
        <input ref={AnsRef} type="number" placeholder = "Answer" />
        </div>
        <div>
            <button onClick={sum}>Add</button>
            <button onClick={sub}>Subtract</button>
            <button onClick={mul}>Multiply</button>
            <button onClick={div}>Divide</button>
        </div>
    </div>
}