import React, { useContext } from "react";
import { DataContext } from "../components/DataProvider";

const Admin = () => {
    const data = useContext(DataContext);

    const { loggedIn } = data;
    const [isLoggedIn] = loggedIn;

    return isLoggedIn ? <div>Admin page</div> : <div>You don't have access. Please Log in.</div>;
};

export default Admin;
