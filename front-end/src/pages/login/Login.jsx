import { useRef } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const dbUser = "sanjo";
  const dbPass = "123";

  const handleAuth = () => {
    console.log(passwordRef);
    console.log(passwordRef.current);

    if (dbUser === usernameRef.current.value) {
      if (dbPass === passwordRef.current.value) {
        navigate("/home");
      } else {
        console.log("password wrong");
      }
    } else {
      console.log("userr doesnt exit");
    }
  };
  return (
    <div className="login-box">
      <div className="login">
        <h2>Login</h2>
        <label htmlFor="username">Email or mobile phone number</label>
        <input type="text" name="username" id="username" ref={usernameRef} />
        <div className="password-labels">
          <label htmlFor="password">Password</label>
          <span className="forgot">Forgot Password</span>
        </div>
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
        />
        <button className="login-btn" onClick={() => handleAuth()}>
          Login
        </button>
        {/* <div className="keep-checkbox">
          <input type="checkbox" />

          <span>Keep me signed in.</span>
          <select name="" id="">
            <option value="">Details</option>
          </select>
        </div> */}
        <div className="new-label">
          <p>New to Blogapp?</p>
        </div>
        <button className="create-btn" onClick={() => navigate("/signup")}>
          Create Your Blog Account
        </button>
      </div>
    </div>
  );
};
