import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Info from "../Info/info";
import Header from "../Header/header";


function Home() {

    return (
        <div className="box">
            <Navbar/>
            <Header/>
            <Info/>
            <Footer/>
        </div>
    );
}

export default Home;