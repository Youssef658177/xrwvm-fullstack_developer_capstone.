import React, { useState } from "react";
import "./Register.css";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async (e) => {
        e.preventDefault();
        // كود الـ Fetch لإرسال البيانات للـ API
    };

    return (
        <form onSubmit={register}>
            <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required />
            <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required />
            <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    );
};
export default Register;
