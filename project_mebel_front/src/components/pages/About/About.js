import "./about.css";
import Info from "../../Info/info";
import Footer from "../../Footer/footer";
import Navbar from "../../Navbar/navbar";

function About () {
    return (
        <div className="center">
		    <div className="about-page-content">
		        <Navbar/>
	            <h1>О нашей компании</h1>
	            <p><br/>
	            </p>
	            <p>
		            Бренд&nbsp;мебели и декора&nbsp;AksHome –&nbsp;часть компании АКС-мебель, которая работает уже больше 16 лет&nbsp;и зарекомендовала себя как надежный партнёр, эксперт на рынке мебельной фурнитуры и мебели.
	            </p><br/>
	            <p>
	            </p>
	            <h3> <b>AksHome – это:</b> </h3>
	            <p>
		            1.&nbsp;&nbsp;&nbsp; Интернет-магазин мебели и декора для дома, офиса и сада.
	            </p>
                <p>
                     2.&nbsp;&nbsp;&nbsp; Розничная сеть из 10 салонов мебели в Минске, Бресте, Гродно, Гомеле, Витебске, Могилеве.
                </p>
                <p>
                     3.&nbsp;&nbsp;&nbsp; Производство под собственной торговой маркой столов, стульев, кресел.
                </p>
                <p>
                     4.&nbsp;&nbsp;&nbsp; Дистрибьюция мебели белорусских производителей&nbsp; ЭЛИГАРД, Поставский мебельный центр, европейского бренда DREWMIX , российских брендов АВРОРА, АРУМА, АЛВЕСТ, UTFC и ФАБРИКАНТ.
                </p><br/>
	            <p>
                <h3><b>Почему стоит покупать у нас?</b></h3>
                </p>
                <p>
                     1.&nbsp; &nbsp; Доставка собственным транспортом в любой город Беларуси&nbsp;&nbsp;<a href="https://akshome.by/delivery/">→ Подробнее</a>
                </p>
                <p>
                     2.&nbsp;&nbsp;&nbsp; Оплата при получении&nbsp;у курьера.&nbsp;Наличными, банковской картой или картами рассрочки ЧЕРЕПАХА, ХАЛВА, FUN и картой Покупок&nbsp;&nbsp;<a href="https://akshome.by/delivery/#oplata">→&nbsp;Подробнее</a>
                </p>
                <p>
                     3.&nbsp;&nbsp;&nbsp; Широкий и постоянно обновляемый ассортимент. Более 3000 моделей мебели и декора и 10 брендов в интернет-магазине&nbsp;&nbsp;<a href="https://akshome.by/catalog/">→&nbsp;Подробнее</a>
                </p>
                <p>
                     4.&nbsp;&nbsp;&nbsp; Предоставляем гарантию на все товары. Гарантия на всю мебель от 1,5 до 2 лет. Возврат в течение 14 дней с момента покупки.&nbsp;&nbsp;<a href="https://akshome.by/guarantee/">→&nbsp;Подробнее</a>
                </p>
            </div>
            <Info/>
            <Footer/>
        </div>
    );
}

export default About;