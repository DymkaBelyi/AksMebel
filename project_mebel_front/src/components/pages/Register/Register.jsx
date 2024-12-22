import { Link } from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./register.css"
import Footer from "../../Footer/footer";
import Navbar1 from "../Navbar1/Navbar1"

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
        await axios.post("http://localhost:8000/api/register/", {
          username,
          email,
          password,
        });

        setSuccess("Регистрация прошла успешно, вы будете перенаправлены на страницу входа");
        setTimeout(() => navigate("/login"), 2000); // Перенаправляем на страницу логина через 2 секунды
      } catch (err) {
        setError(
          err.response?.data?.message || "An error occurred during registration."
        );
      }
    };

    return (
        <div className="center">
            <Navbar1/>
            <div className="registration_modal">
                <div className="content-box">
                     <div className="tab_section">
                        <div className="registration_tab active" data-tab="registration">Регистрация</div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        {success && <div className="alert alert-success">{success}</div>}
                        <div className="singin_tab active" data-tab="singin">
                            <Link to="/login/" rel="nofollow">Вход</Link>
                        </div>
                    </div>
                    <div className="tab_content">
                        <div className="registration active">
                            <form className="registration_form" name="regform" method="post" enctype="multipart/form-data" onSubmit={handleRegister}>
                                <div className="check_jur"></div>
                                <input type="hidden" name="backurl"/>
                                <div className="input_box">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <script type="text/html" data-bx-template="main-user-consent-request-loader" data-required-name="">
                                    <div className="main-user-consent-request-popup">
                                        <div className="main-user-consent-request-popup-cont">
                                            <div className="main-user-consent-request-popup-body">
                                                <div className="main-user-consent-request-loader">
                                                    <svg className="main-user-consent-request-circular" viewBox="25 25 50 50">
                                                        <circle className="main-user-consent-request-path" cx="50" cy="50" r="20" fill="none" stroke-width="1" stroke-miterlimit="10"></circle>
                                                    </svg>
                                                </div>
                                                <div data-bx-content="" className="main-user-consent-request-popup-content">
                                                    <div className="main-user-consent-request-popup-textarea-block">
                                                        <div data-bx-textarea="" className="main-user-consent-request-popup-text"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </script>
                                <div className="bx-authform-formgroup-container">
                                    <button type="submit" className="btn btn-primary" name="register_submit_button">Зарегестрироваться</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="img_box_registration"></div>
            </div>
            <Footer/>
        </div>
    )
}

export default Register;
