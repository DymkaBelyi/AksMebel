import nav from "./nav.jpg"
import Info from "../../Info/info";
import Footer from "../../Footer/footer";
import Navbar from "../../Navbar/navbar";

function Contacts () {
    return (
        <div className="center">
            <Navbar/>
            <h1 className="center">Контакты</h1><br/><br/><br/>

            <b>Розничные&nbsp;продажи:</b><br/><br/>
            <a href="https://akshome.by/shops/">Салоны мебели AksHome</a><br/>
            <span>пн-пт: с 09:00 до 19:00</span><br/>
            <span>сб-вс: с 10:00 до 15:00</span><br/>
            <a href="mailto:zakaz@akshome.by">zakaz@akshome.by</a><br/><br/><br/>

            <b>Продажи юридическим лицам для собственных нужд:</b><br/><br/>
            <span>+375 (29) 135-75-11</span><br/>
            <span>пн-пт: с 08:30 до 17:30</span><br/>
            <a href="mailto:beznal@aks.by">beznal@aks.by</a><br/><br/><br/>

            <b>Оптовые продажи:</b><br/><br/>
            <span>+375 (29/44) 500-8-500 МТС / А1</span><br/>
            <span>пн-пт: с&nbsp;08:30 до 17:30</span><br/>
            <a href="mailto:opt@akshome.by">opt@akshome.by</a><br/><br/><br/>

            <b>Отдел маркетинга:</b><br/><br/>
            <a href="mailto:marketing@akshome.by">marketing@akshome.by</a><br/>
            <span>пн-пт: с&nbsp;08:30 до 17:30</span><br/><br/><br/>

            <img width="42" alt="Адрес" src={nav} height="42" title="Адрес"/><br/>
            <b>Адрес:</b><br/>
            <span>г. Брест, ул. Вычулки,129А</span><br/><br/><br/>


            <b>ЮРИДИЧЕСКИЙ АДРЕС:</b><br/><br/>
            <span>Частное торгово-производственное унитарное предприятие «Акс-мебель»</span><br/>
            <span>224026, Республика Беларусь,&nbsp;г. Брест, ул. Вычулки, д.129А/3, пом. № 1,&nbsp;а/я-47</span><br/>
            <span>УНП&nbsp;290459038</span><br/>
            <span>Р/с&nbsp;BY62BPSB30121221120109330000, БИК&nbsp;BPSBBY2X, ОАО «Сбер Банк», Брест, улица Мицкевича, 10</span><br/><br/><br/>
            <Info/>
            <Footer/>
        </div>
    )
}

export default Contacts;