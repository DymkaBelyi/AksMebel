import "./akshome.css"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice"

function AksHome({aks}) {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        const item = {
            id: aks.id,
            name: aks.name,
            price: aks.price_blr,
            image: aks.image
        };
        dispatch(addToCart(item));
    }

    return (
        <div className="card">
            <div className="border">
                <div className="wrap">
                    <div className="product-wrap">
                        <Link to=""><img src={aks.image}/></Link>
                    </div>
                    <div className="loop-action">
                      <Link to={`/product/${aks.id}`} className="add-to-cart">Посмотреть товар</Link>
                      <button className="add-to-cart" onClick={() => handleAddToCart()}>Добавить в козрину</button>
                    </div>
                </div>
                <div className="product-info">
                  <div className="stars"></div>
                  <h3 className="product-title">{aks.name}</h3>
                  <div className="price">{aks.price_blr}</div>
               </div>
            </div>
        </div>
    );
}

export default AksHome;

