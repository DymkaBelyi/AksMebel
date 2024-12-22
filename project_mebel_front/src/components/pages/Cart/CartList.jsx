import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";
import Cart from "./Cart";
import CartTable from "./CartTable";
import Login from "../Login/Login"
import { clearCart } from "../../../redux/cartSlice"

const CartList = () => {
    const dispatch = useDispatch()
    const {items, totalPrice} = useSelector((state) => state.cart)

    const onClickRemove = () => {
        if (window.confirm('Вы действительно хотите удалить всё с корзины?')) {
            dispatch(clearCart());
        }
    }

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

    if (totalPrice === 0) {
        return <Cart />
    }


    return (
        <div className="box">
            { isAuthenticated ? (
                <div>
                    <Navbar/>
                    <div className="cart_title">Ваша корзина</div>
                    <div className="cart_title"><small>Количество товаров в корзине: {items.length} </small></div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-success" onClick={onClickRemove}>Очистить корзину</button>
                    </div>
                    {items.map(item =>
                        <CartTable key={item.id} {...item} /> )
                    }
                    <div className="order_total">
                        <div className="order_total_content text-md-right" >
                            <div className="order_total_title">Общая стоимость:</div>
                            <div className="order_total_amount">{parseInt(totalPrice)} BYN</div>
                        </div>
                    </div>
                    <button className="btn btn-danger" onClick={handleLogout}>
                        Выйти
                    </button>
                    <Footer/>
                </div>
            ) : (
                <div>
                    <Login/>
                </div>
            )}
        </div>
    )
}

export default CartList;