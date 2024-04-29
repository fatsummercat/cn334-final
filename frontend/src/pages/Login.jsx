import React, { useState } from "react";
import "./css/Login.css";

const Login = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="login">
      {login ? (
        <div className="signup-container">
          <h1>Login</h1>
          <div className="signup-fields">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button>Sign in</button>
          <p onClick={() => setLogin(false)} className="signup-text">
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
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button>Create</button>
          <p onClick={() => setLogin(true)} className="login-text">
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
