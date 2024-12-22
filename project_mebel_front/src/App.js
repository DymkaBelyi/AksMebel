import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {Component} from "react";

import Home from "./components/Home/Home";
import AksMebel from "./components/pages/AksHomeList/Aks_mebel";
import About from "./components/pages/About/About";
import Contacts from "./components/pages/Contacts/Contacts";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import NotFound from "./components/pages/NotFound/NotFound";
import Product from "./components/pages/Product/Product";
import CartList from "./components/pages/Cart/CartList";
import Profile from "./components/pages/Profile/profile";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/aks_mebel" element={<AksMebel/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/product/:id" element={<Product/>}/>
                    <Route path="/cartlist" element={<CartList/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}


export default App;
