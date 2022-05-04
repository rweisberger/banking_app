import { useState, useContext } from "react";
import UserContext from "./context";
import AlertComponent from "./alert";
import Card from "./card";

function Withdraw(){
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const ctx = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [withdrawApproval, setWithdrawApproval] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    let activeUser = ctx.activeUser;
    let failureMessage;

    // onclick update balance in user context
    function makeWithdraw(){
        if(0 < withdrawAmount && withdrawAmount <= activeUser.balance) {
            activeUser.balance -= withdrawAmount;
            activeUser.transactionHistory.unshift({date: Date(), change: `- $${withdrawAmount}`, balance: activeUser.balance});
            setWithdrawApproval(true);
            setWithdrawAmount(0);
            document.getElementById('withdraw').value='';
        } else if(0 > withdrawAmount) {
            setErrorMessage('Enter a positive number.');
            setWithdrawApproval(false);
        } else {
            setErrorMessage('Insufficient funds.');
            setWithdrawApproval(false);
        }
        setOpen(true);
        return failureMessage
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
                {withdrawApproval ? 
                    <AlertComponent open={open} message="The withdraw was processed." type="success" onClose={()=> setOpen(false)} />
                    :
                    <AlertComponent open={open} message={errorMessage} type="error" onClose={()=> setOpen(false)} />
                }
                </>
            } 
            />
        </div>
    );
}

export default Withdraw;

