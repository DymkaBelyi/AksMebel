import "./info.css";
import pol from "./pol.svg";
import ass from "./ass.svg";
import kon from "./kon.svg";
import dos from "./dos.svg";

function Info() {
    return (
        <div className="advantages-section">
            <div className="container">
                <div className="advantages-wrapper">
                    <div className="advantages-element">
                        <img alt="Оплата при получении" src={pol} height="40" width="40"/>
                        <p className="descr">Оплата при получении</p>
                    </div>
                    <div className="advantages-element">
                        <img alt="Широкий ассортимент" src={ass} height="40" width="40"/>
                        <p className="descr">Широкий ассортимент</p>
                    </div>
                    <div className="advantages-element">
                        <img alt="Профессиональная консультация" src={kon} height="40" width="40"/>
                        <p className="descr">Профессиональная консультация</p>
                    </div>
                    <div className="advantages-element">
                        <img alt="Доставка по всей Беларуси *" src={dos} height="40" width="40"/>
                        <p className="descr">Доставка по всей Беларуси *</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;