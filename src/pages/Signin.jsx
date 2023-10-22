import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/user.action";
import { useNavigate } from "react-router";

function Signin() {
    const [formData, setFormData] = useState({
        email: "tony@stark.com",
        password: "password123",
    });

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const tokenResponse = await fetch(
            "http://localhost:3001/api/v1/user/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );

        const tokenData = await tokenResponse.json();
        const bearer = "Bearer " + tokenData.body.token;

        const userResponse = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: bearer,
                },
            }
        );

        const userData = await userResponse.json();

        if (userResponse.ok) {
            dispatch(login(userData.body));
            navigate('/user')
        }
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="email"
                            id="username"
                            name="email"
                            value={formData.email}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
}

export default Signin;
