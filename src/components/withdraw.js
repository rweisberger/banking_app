import React,  { useState, useContext } from "react";
import { UserContext, Card } from "./context";

function Withdraw(){
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const ctx = useContext(UserContext);
    let activeUser = ctx.activeUser;

    // onclick update balance in user context
    function makeWithdraw(){
        if(0 < withdrawAmount && withdrawAmount <= activeUser.balance) {
            activeUser.balance -= withdrawAmount;
            alert('The withdraw was processed.');
            setWithdrawAmount(0);
            // SM: Add 2-way binding, see comments in deposit.js
            document.getElementById('withdraw').value='';
        } else if(0 > withdrawAmount) {
            alert('Enter a positive number.')
        } else {
            alert('Insufficient funds.')
        }
    }

    return(
        <div className="container">
            <Card 
            bgcolor="info"
            header="Withdraw"
            body={
                <>
                Account Balance : $ {activeUser ? activeUser.balance : '--'}<br/><br/>  
                Withdraw Amount<br/> 
                <input type="number" className="form-control" id="withdraw" placeholder="Enter amount" onChange={e => setWithdrawAmount(Number(e.currentTarget.value))}/><br/>
                <button type="submit" className="btn btn-light" onClick={makeWithdraw} disabled={withdrawAmount ? false : true}>Withdraw</button>
                </>
            } 
            />
        </div>
    );
}

export default Withdraw;
// problems: trying to add balance without using the ternary operator, error "cannot get property balance of undefined" and everything breaks. Need to have something to display when no user is logged in and when a user is logged in. 
// SM: Checking for activeUse and then showing the balance or -- is a great solution
// SM: Ideally this page wouldn't even load if a user wasn't authenticated, that would require using protected routes that I discussed in office hours with the to-do-list-app
// need to reset form so that the input is zero and the balance updates 