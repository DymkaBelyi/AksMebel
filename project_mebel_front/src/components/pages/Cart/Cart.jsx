import { Link } from "react-router-dom";
import React from 'react';

import "./cart.css"
import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";



const Cart = () => {

    return (
        <div className="box">
            <Navbar/>
            <div className="bx-sbb-empty-cart-container">
                <div className="bx-sbb-empty-cart-image">
                    <img src="" alt=""/>
                </div>
                <div className="bx-sbb-empty-cart-text">Ваша корзина пуста</div>
                <div className="bx-sbb-empty-cart-desc">Выберите нужную вам мебель из нашего списка мебели</div>
                <div className="bx-sbb-empty-cart-desc">
                    <Link to="/aks_mebel/">Перейдите в список нашей мебели</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart;







