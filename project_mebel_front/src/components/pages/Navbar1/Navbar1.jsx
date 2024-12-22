import { Link } from "react-router-dom";

import "./navbar1.css"

function Navbar() {
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
        </header>
    )
};

export default Navbar;
