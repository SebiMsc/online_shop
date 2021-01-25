import React, { useContext, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import appUsers from '../../static/appUsers.json';
import { DataContext } from "../DataProvider";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const data = useContext(DataContext);
    const { loggedIn } = data;
    const [isLoggedIn, setIsLoggedIn] = loggedIn;

    console.log('isLoggedIn', isLoggedIn);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        for (const user of appUsers) {
            if (user.username === email && user.password === password) {
                console.log('logging in');
                setIsLoggedIn(true);
                return;
            }
        }

        console.log('should not login');
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Username: </Form.Label>
                    <Form.Control
                        autoFocus
                        type="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );
}
