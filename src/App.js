import React,  { useState } from "react";
import { AuthProvider } from "./components/Auth/authProvider";
import RequireAuth from "./components/Auth/requireAuth";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter,
  Routes, 
  Route
} from "react-router-dom";
import UserContext from "./components/context";
import NavBar from "./components/navbar";
import Home from "./components/home";
import CreateAccount from "./components/createaccount";
import Login from "./components/login";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import AllData from "./components/alldata";
import Transactions from "./components/transactions";
import './App.css';

// Selga contributed the UserProvider function. This sets up the context with additional state features that are used in other components. 
// function UserProvider({children}) {
//   let [users, setUsers] = useState([{name:'Rachel', email:'rachel@gmail.com', password:'secret', balance:100}]);
//   let [activeUser, setActiveUser] = useState(null);
//   let context = {users, setUsers, activeUser, setActiveUser};
//   // console.log(children);
//   return <UserContext.Provider value={context}>{children}</UserContext.Provider>
// }
function App() {
  let [users, setUsers] = useState([{name:'Rachel', email:'rachel@gmail.com', password:'secret', balance:100, transactionHistory: []}]);
  let [activeUser, setActiveUser] = useState(null);
  let context = {users, setUsers, activeUser, setActiveUser};

  return (
    <HashRouter>
      <UserContext.Provider value={context}> 
        {/* <AuthProvider> */}
          <NavBar/>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />
            <Route path="/login/" element={<Login />}/>
            {/* <Route path="/protected" element={ */}
              {/* <RequireAuth> */}
                <Route path="/deposit/" element={<Deposit />}/>
                <Route path="/withdraw/" element={<Withdraw />}/>
                <Route path="/accountActivity/" element={<Transactions />} />
                <Route path="/AllData/" element={<AllData />} />
              {/* </RequireAuth>} */}
            {/* /> */}
          </Routes>
        {/* </AuthProvider> */}
      </UserContext.Provider>
    </HashRouter>
);
}

export default App;
