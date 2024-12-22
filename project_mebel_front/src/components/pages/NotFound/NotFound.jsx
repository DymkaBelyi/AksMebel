import { Link } from "react-router-dom";

import not from "./404.png"
import Footer from "../../Footer/footer";
import Navbar from "../../Navbar/navbar";
import Info from "../../Info/info";

function NotFound () {
    return (
        <div className="notfound-content">
            <Navbar/>
            <div className="bx-404-block"><img src={not} alt="aaa"/></div>
            <div className="bx-404-text-block">Неправильно набран адрес, <br/>или такой страницы на сайте больше не существует.</div>
            <div className="bx"> Вернитесь на</div>
                <Link to="/">
                    <div className="bx">Главную</div>
                </Link>
            <Info />
            <Footer/>
        </div>
    );
}

export default NotFound;