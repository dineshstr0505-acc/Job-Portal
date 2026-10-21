import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            alert("Please fill in all fields");
            return;
        }

        alert("Login successful!");

        navigate("/");
    };

    return (
        <div className="login-page">

            <div className="login-box">

                <h1>Welcome Back</h1>

                <p className="login-subtitle">
                    Login to your Job Portal account
                </p>

                <form onSubmit={handleLogin}>

                    <div className="input-group">
                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="forgot-password">
                        <Link to="#">Forgot Password?</Link>
                    </div>

                    <button type="submit" className="login-btn">
                        Login
                    </button>

                </form>

                <p className="register-text">
                    Don't have an account?{" "}
                    <Link to="/Register">Register Now</Link>
                </p>

            </div>

        </div>
    );
}

export default Login;
