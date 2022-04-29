import React,  { useState, useContext } from "react";
import { UserContext, Card } from "./context";
// SM: import './deposit.css'

function Deposit(){
    const [depositAmount, setDepositAmount] = useState(0)
    const ctx = useContext(UserContext);
    let activeUser = ctx.activeUser;
    // console.log('deposit amount:',typeof depositAmount);

function makeDeposit(){
    // console.log(typeof activeUser.balance);
    // console.log('deposit amount:',typeof depositAmount);
    if(depositAmount > 0) {
        activeUser.balance += depositAmount;
        alert('The deposit was successfully received.');  
    } else {
        alert('Deposit values cannot be negative.');
    };  
    setDepositAmount(0);
    // SM: See line 34, by using value={depositAmount} the value of the html element will update to the value of the state via 2-way binding
    // SM: Using 2-way binding is the more correct React way of doing this (same applies for other components)
    // document.getElementById('deposit').value='';
    // the last two lines make the balance update, by changing state, and reset the input field
}

    return(
        <div className="container">
            <Card 
                bgcolor="info"
                header="Deposit"
                body={
                    <>
                    {/* SM: I would recommend wrapping the text in either <div></div> or <p></p> tags, would be able to remove some <br/>s */}
                    {/* SM: Additionally, with create-react-app, you could add styling with a CSS file called deposit.css to add margins/padding/etc */}
                    Account Balance : $  {activeUser ? activeUser.balance : '--'}<br/><br/>  
                    Deposit Amount<br/> 
                    {/* SM: With React, you can convert a string to a number by adding a + before it */}
                    <input type="number" className="form-control" id="deposit" placeholder="Enter amount" onChange={e => setDepositAmount(+e.currentTarget.value)} value={depositAmount} /><br/>
                    <button type="submit" className="btn btn-light" onClick={makeDeposit} disabled={depositAmount ? false : true}>Deposit</button>
                    </>
                } 
            />
        </div>
    );
}

export default Deposit;

//input is a string, even though the state is initialized to the number 0. It was not obvious with the withdraw because 100 - "90" is 10, but in the deposit 100 + "90" is 10090. Thats is why I am adding Number() to the onChange.
// SM: see note on line 38