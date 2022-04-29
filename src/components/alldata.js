import React, { useContext } from "react";
import { UserContext } from "./context";

function AllData(){
    // SM: We are able to call useContext because the AllData component is a child of UserContext.Provider
    const ctx=useContext(UserContext);

    let users = ctx.users; // SM: This is a great way to improve the readability of your code
    // users.forEach(user => {
    //     console.log(user.name, user.email, user.password)
    // });


    return(
        <div className="container">
            <h1>All Data</h1>
            {/* SM: indents can be cleaned up but everything thing looks great! */}
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllData;
// SM: GitHub pull requests (code reviews) get mad when you don't have an extra new line at the end of the file, just fyi!
