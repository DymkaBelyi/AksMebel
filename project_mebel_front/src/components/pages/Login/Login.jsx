import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./login.css"
import Footer from "../../Footer/footer";
import Navbar1 from "../Navbar1/Navbar1"


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
        const response = await axios.post("http://localhost:8000/api/login/", {
        username,
        password,
        });

        // Сохраняем токены в localStorage
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);

        // Перенаправляем на домашнюю страницу
        navigate("/");
      } catch (err) {
        setError("Неправильно введён логин или пароль");
      }
    };

    return (
        <div className="center">
            <div className="center">
                <Navbar1/>
                <div className="registration_modal">
                    <div className="content_box">
                        <div className="tab_section">
                            <div className="registration_tab" data-tab="registration">
                                <Link to="/register/" rel="nofollow">Регистрация</Link>
                            </div>
                            <div className="singin_tab active" data-tab="singin" >Вход</div>
                            {error && <div className="alert alert-danger">{error}</div>}
                        </div>
                        <div className="tab_content">
                            <div className="singin active">
                                <form name="form_auth" method="post" target="_top" className="singin_form" onSubmit={handleLogin}>
                                    <input type="hidden" name="backurl" value="/login"/>
                                    <input type="hidden" name="AUTH_FORM" value="Y"/>
                                    <input type="hidden" name="TYPE" value="AUTH"/>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <div className="bx-authform-formgroup-container">
                                        <input type="submit" className="btn btn-primary" name="Login" value="Войти"/>
                                    </div>
                                </form>
                                <hr className="bxe-light"/>
                            </div>
                        </div>
                    </div>
                    <div className="img_box_registration"></div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Login;