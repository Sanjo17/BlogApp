import { useContext, useRef } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { AuthContext } from "../../context/AuthProvider";
export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleAuth = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await login({ email, password });
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
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
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
