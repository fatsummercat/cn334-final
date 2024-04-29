import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import "./css/Login.css";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const flname = ;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const BASE_API_URL = "http://cn334-api.japaneast.cloudapp.azure.com/api/v1";

  const handleLogin = async () => {
    console.log(email);
    console.log(password);

    try {
      const params = new URLSearchParams();
      params.append("username", email);
      params.append("password", password);

      setEmail("");
      setPassword("");

      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      };
      await axios.post(`${BASE_API_URL}/login`, params, config);

      console.log("login success");
    } catch (error) {
      console.log("login failed", error);
    }
  };

  const handleRegister = async () => {
    console.log(firstName + " " + lastName);
    console.log(email);
    console.log(password);

    try {
      const params = new URLSearchParams();
      params.append("name", firstName + " " + lastName);
      params.append("email", email);
      params.append("password", password);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      };
      await axios.post(`${BASE_API_URL}/register`, params, config);

      console.log("register success");
    } catch (error) {
      console.log("register failed", error);
    }
  };

  return (
    <div className="login">
      {isLoggedIn ? (
        <div className="signup-container">
          <h1>Login</h1>
          <div className="signup-fields">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button onClick={() => handleLogin()}>Sign in</button>
          <p onClick={() => setIsLoggedIn(false)} className="signup-text">
            Create account
          </p>
          <div className="agree">
            <hr />
            <p>
              By continuing, you agree to <u>our Terms of Use</u>,{" "}
              <u>our Privacy Policy</u> and <u>our Disclaimer</u>.
            </p>
          </div>
        </div>
      ) : (
        <div className="signup-container">
          <h1>Create Account</h1>
          <div className="signup-fields">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button onClick={() => handleRegister()}>Create</button>
          <p onClick={() => setIsLoggedIn(true)} className="login-text">
            Login
          </p>
          <div className="agree">
            <hr />
            <p>
              <i>
                By continuing, you agree to <u>our Terms of Use</u>,{" "}
                <u>our Privacy Policy</u> and <u>our Disclaimer</u>.
              </i>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
