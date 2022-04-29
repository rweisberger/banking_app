import { useState } from "react";
// SM: it's fine to leave it, but you no longer have to import React to use React (just fyi)
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter,
  Routes, 
  Route
} from "react-router-dom";
import { UserContext } from "./components/context";
import NavBar from "./components/navbar";
import Home from "./components/home";
import CreateAccount from "./components/createaccount";
import Login from "./components/login";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
// import Balance from "./components/balance";
import AllData from "./components/alldata";
import './App.css';
// SM: A lot of companies will have linters that will auto-sort imports
// Just pointing it out, no changes needed

/*
SM: Let's review context. Reminder: we call createContext once (see context.js).
Context lets us pass a value deep into the component tree without explicitly 
threading it through every component. (Especially convenient for nested components.) 
You are right, it is very similar to props, but it keeps your code a little bit more 
clean because we don't have to pass it to EVERY component. Context is designed to 
share data that can be considered “global” for a tree of React components, such 
as the current authenticated user, theme, or preferred language vs. props are 
used to pass specific data between components (not global values).
*/

// Selga contributed the UserProvider function. This sets up the context with additional state features that are used in other components. 
function UserProvider({children}) {
  let [users, setUsers] = useState([{name:'Rachel', email:'rachel@gmail.com', password:'secret', balance:100}]);
  let [activeUser, setActiveUser] = useState(null);
  let context = {users, setUsers, activeUser, setActiveUser};
  // console.log(children);
  /*
  SM: Context Provider - this is a feature of React

  React documentation: Every Context object comes with a Provider React component 
  that allows consuming components to subscribe to context changes. The Provider 
  component accepts a value prop to be passed to consuming components that are 
  descendants of this Provider. One Provider can be connected to many consumers. 
  Providers can be nested to override values deeper within the tree. All consumers 
  that are descendants of a Provider will re-render whenever the Provider’s value prop changes.

  In English: The Context Provider allows its children to access the context object.
  When the context object is updated, all of the children components re-render.

  If we update the state of users or activeUser with setUsers or setActiveUsers,
  all of the components nested within the provider will re-render.

  https://reactjs.org/docs/context.html#contextprovider
  */
  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}
function App() {

  return (
    <HashRouter>
      <UserProvider> 
        {/* SM: These are the children of UserProvider, which means they will re-render when the context changes */}
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/CreateAccount/" element={<CreateAccount />} />
          <Route path="/login/" element={<Login />}/>
          <Route path="/deposit/" element={<Deposit />}/>
          <Route path="/withdraw/" element={<Withdraw />}/>
          {/* <Route path="/balance/" element={<Balance />}/> */}
          <Route path="/AllData/" element={<AllData />} />
        </Routes>
      </UserProvider>
    </HashRouter>
);
}

export default App;
