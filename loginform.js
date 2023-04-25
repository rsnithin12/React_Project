import React from "react";
import "./loginform.css";
import { useNavigate } from "react-router";
import { useState } from "react";

const Loginform = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");

  if (auth) {
    if (name && phone && email) {
      localStorage.setItem("Name", name);
      localStorage.setItem("phonenumber", phone);
      localStorage.setItem("email", email);
      navigate("/homepage");
    }
  }

  return (
    <div className="cover">
      <h1>Login Page</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={({ target }) => setname(target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phone}
            pattern="{1}-[0-9]{10}"
            placeholder="+91"
            onChange={({ target }) => setphone(target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={({ target }) => setemail(target.value)}
          />
        </div>
        <button className="btn" onClick={() => setAuth(true)} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Loginform;
