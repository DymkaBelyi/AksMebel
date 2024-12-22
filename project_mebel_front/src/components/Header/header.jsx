import { Link } from "react-router-dom";

import "./header.css"
import mebel from "./mebel.jpg";
import mebel1 from "./mebel1.png";
import mebel2 from "./mebel2.jpg";



function Header() {
    return (
        <div className="container header-info">
            <div className="row">
                <div className="col-sm col-item ">
                    <h1><Link to="http://localhost:3000/aks_mebel/" className="global">У нас большой выбор мебели для дома и офиса</Link></h1>
                    <div className="alert alert-dismissible alert-light alert-block">
                        <img src={mebel} className="d-block user-select-none img-head-info" alt="aaa"/>
                        <img src={mebel1} className="d-block user-select-none img-head-info" alt="aaa"/>
                        <img src={mebel2} className="d-block user-select-none img-head-info" alt="aaa"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
