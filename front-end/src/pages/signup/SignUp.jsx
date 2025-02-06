import { useContext, useRef } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { register } from "../../services/authService";
export const SignUp = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleAuth = async () => {
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      const response = await register({ username, email, password });
      console.log(response);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="login-box">
      <div className="login">
        <h2>SignUp</h2>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" ref={usernameRef} />
        <label htmlFor="username">Email</label>
        <input type="email" name="email" id="email" ref={emailRef} />
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
        <button className="create-btn" onClick={() => navigate("/login")}>
          login
        </button>
      </div>
    </div>
  );
};
