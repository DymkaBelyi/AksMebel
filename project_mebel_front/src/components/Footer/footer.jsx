import "./footer.css";
import images from "./images.jpg";



function Footer() {
    return (
        <>
            <div className="container">
                <div className="footer-columns">
                    <div className="footer-columns-item">
                        <a href="/" title="to home" className="footer-logo">
                            <img width="200" height="70" src={images} alt="logo"/>
                        </a>
                        <p className="work_time">
                            <b>Режим работы контакт-центра интернет-магазина :&nbsp;</b>
                        </p>
                        <p className="work_time">
                            <strong>пн - пт:</strong> с 9.00 до 19.00
                        </p>
                        <p className="work_time">
                            <strong>сб - вс:</strong> с 10.00 до 15.00
                        </p>
                        </div>
                        <div className="footer-columns-item">
                            <span className="title">Мебель AksHome</span>
                            <ul>
                                <li><a href="/about/">Наша история</a></li><br/>
                                <li><a href="/news/">Новости</a></li><br/>
                                <li><a href="/public-oferta/">Публичный договор</a></li>
                            </ul>
                        </div>
                        <div className="footer-columns-item">
                            <span className="title">Покупателям</span>
                            <ul>
                                <li><a href="/delivery/">Доставка  и оплата</a></li><br/>
                                <li><a href="/guarantee/">Гарантия и возврат</a></li><br/>
                                <li><a href="/faq/">Часто задаваемые вопросы</a></li>
                            </ul>
                        </div>
                        <div className="footer-columns-item">
                            <span className="title">Оптовые продажи</span>
                            <ul>
                                <li><a href="/opt/">Условия сотрудничества</a></li>
                            </ul>
                        </div>
                        <div className="footer-columns-item">
                            <span className="title">Контакты</span>
                            <div style={{"margin-top":"5px"}}>
                                <p>
                                     email: zakaz@akshome.by
                                </p>
                                <p>
                                     тел.: <a href="tel:+375293707878">+375 29 370 78 78</a>
                                </p>
                            </div>
                        </div>
                        <div className="footer-columns-item footer-payment-delivery">
                            <span className="title">Способы доставки товара</span>
                            <ul>
                                <li>Самовывоз из пункта выдачи товара;</li><br/>
                                <li>Транспортным средством продавца до подъезда;</li><br/>
                                <li>Доставка Европочтой</li>
                            </ul>
                            <span className="title">Способы оплаты товара</span>
                            <ul>
                                <li>Наличными, банковской картой или картой рассрочки курьеру;</li><br/>
                                <li>Банковской картой в режиме «онлайн»;</li><br/>
                                <li>Через систему «Расчет» (ЕРИП);</li><br/>
                                <li>Наличными, банковской картой, картой рассрочки в пунктах самовывоза.</li><br/>
                            </ul>
                        </div>
                    </div>

            </div>
        </>
    );
}

export default Footer;