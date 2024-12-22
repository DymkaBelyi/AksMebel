import "./product.css"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";
import Info from "../../Info/info";



const Product = () => {

    const [product, setProduct] = useState({})

    const params = useParams()

    useEffect (() => {
        axios(`http://127.0.0.1:8000/api/aks_mebel/${params.id}`)
            .then(({data}) => setProduct(data))
    }, [])


    return (
        <div className="center">
            <Navbar/>
            <h2><Link to="http://localhost:3000/aks_mebel/" className="global">Вернуться к списку мебели</Link></h2>
            <h3>{product.name}</h3>
            <img src={product.image}/>
            <div className="product-list">
                <span className="price">{product.price_blr}</span>
                <span className="material">Изготовлен из материала: {product.material}</span>
                <span className="color">Цвет товара: {product.color}</span>
                <span className="quantity">{product.quantity}</span>
            </div>
            <Info/>
            <Footer/>
        </div>
    );
}

export default Product;