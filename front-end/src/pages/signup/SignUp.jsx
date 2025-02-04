import { useRef } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
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
        navigate("/");
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
        <h2>SignUp</h2>
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
          SignUp
        </button>
        {/* <div className="keep-checkbox">
          <input type="checkbox" />

          <span>Keep me signed in.</span>
          <select name="" id="">
            <option value="">Details</option>
          </select>
        </div> */}
        <div className="new-label">
          <p>already hava an account?</p>
        </div>
        <button className="create-btn" onClick={() => navigate("/")}>
          login
        </button>
      </div>
    </div>
  );
};
