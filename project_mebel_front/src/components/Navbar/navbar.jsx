import "./navbar.css"
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import {useSelector} from "react-redux";
import { useEffect, useState } from "react";

const Navbar = () => {
    const{ items } = useSelector((state) => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    // Проверка аутентификации при загрузке компонента
    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (token) {
        setIsAuthenticated(true);
        } else {
        setIsAuthenticated(false);
        }
    }, []);

    // Функция выхода из системы
    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setIsAuthenticated(false);
        navigate("/login");
    };

    return (
        <header>
            <div className="wrap-logo">
                <Link to="http://localhost:3000/" className="logo">Мебель для дома и офиса</Link>
            </div>
            <ul align="center">
                <li><Link to = "http://localhost:3000/">Главная</Link></li>
                <li><Link to = "/contacts">Контакты</Link></li>
                <li><Link to = "/about">О нас</Link></li>
            </ul>
            <nav align="right">
                {isAuthenticated ? (
                    <Link to="/cartlist"><FaCartShopping />{totalCount}</Link>
                ) : (
                    <Link to="/cartlist"><FaCartShopping />{totalCount}</Link>
                )}

                {isAuthenticated ? (
                    <li className="nav-item">
                      <button className="btn btn-danger" onClick={handleLogout}>
                          Выйти
                      </button>
                      <Link to="/profile">Ваш Профиль</Link>
                    </li>
                ) : (
                    <div>
                        <Link to="/login">Войти</Link>
                        <Link to="/register">Зарегестрироваться</Link>
                    </div>
                )}
            </nav>
        </header>
    )
};

export default Navbar;



