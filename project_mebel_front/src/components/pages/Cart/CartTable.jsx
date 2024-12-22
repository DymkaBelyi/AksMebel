import React from 'react';
import { useDispatch } from "react-redux";

import "./carttable.css"
import { addToCart, minusItem, removeItem } from "../../../redux/cartSlice"

const CartTable = ({id, name, price, image, count}) => {
    const dispatch = useDispatch();
    const onClickPlus = () => {
        dispatch(
            addToCart({
                id,
            }),
        );
    };

    const onClickMinus = () => {
        dispatch(minusItem(id));
    };

    const onClickRemove = () => {
        if (window.confirm('Вы действительно хотите удалить товар?')) {
            dispatch(removeItem(id));
        }
    }

    return (
        <div className="box">
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-lg-10 offset-lg-1">
                         <div className="cart_container">
                             <div className="cart_items">
                                 <ul className="cart_list">
                                     <li className="cart_item clearfix">
                                         <div className="cart_item_image"><img src={image} alt=""/></div>
                                            <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                <div className="cart_item_name cart_info_col">
                                                    <div className="cart_item_title">Название товара</div>
                                                    <div className="cart_item_text">{name}</div>
                                             </div>
                                             <div className="cart_item_quantity cart_info_col">
                                                 <div className="cart_item_title">Количество</div>
                                                 <button className="count" onClick={(count > 1) ? onClickMinus : onClickRemove}>-</button>
                                                 <div className="cart_item_text">{count}</div>
                                                 <button className="count" onClick={onClickPlus}>+</button>
                                             </div>
                                             <div className="cart_item_price cart_info_col">
                                                 <div className="cart_item_title">Цена за единицу</div>
                                                 <div className="cart_item_text">{parseInt(price.replace(/\s+/g, ''))} BYN</div>
                                             </div>
                                             <div className="cart_item_total cart_info_col">
                                                 <div className="cart_item_title">Total</div>
                                                 <div className="cart_item_text">{count * parseInt(price.replace(/\s+/g, ''))} BYN</div>
                                             </div>
                                             <div className="cart_item_total cart_info_col">
                                                 <button type="button" className="btn btn-outline-danger" onClick={onClickRemove}>Удалить товар</button>
                                             </div>
                                         </div>
                                     </li>
                                </ul>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default CartTable;