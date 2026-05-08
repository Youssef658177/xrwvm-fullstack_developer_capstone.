import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    // منطق إرسال البيانات للـ API الخاص بـ Django
  };

  return (
    <div className="register_container">
      <form onSubmit={handleRegister}>
        <h2>Sign Up</h2>
        <div className="input_group">
          {/* الحقول الخمسة المطلوبة */}
          <input type="text" name="username" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required/>
          <input type="text" name="first_name" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required/>
          <input type="text" name="last_name" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required/>
          <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
          <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        {/* زر التسجيل المطلوب */}
        <button type="submit" className="register_button">Register</button>
      </form>
    </div>
  );
};

export default Register;
