import "./akshome.css"
import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";
import Info from "../../Info/info";
import AksHome from "./AksHome";
import axios from "axios";
import React, {useState, useEffect} from "react";
import Pagination from "../../Pagination/pagination"
import Categories from "../../Categories/Categories"
import Skeleton from "../../Skeleton/Skeleton";



function AksMebel() {
    const[akshome, setAkshome] = useState([])  //создаем состояние для отображения всеx наших данных
    const[category, setCategory] = useState(1)  //Создаем состояние для категорий
    const[loading, setLoading] = useState(false)  // создаем состояние для загрузки
    const[currentPage, setCurrentPage] = useState(1)  //создаем состояние на текущую страницу
    const[aksPerPage] = useState(50)  //создаем состояние, которое показывает какое количество элементов отображать на одной странице, этот state мы менять не будем, поэтому пишем его с одним аргументом


    useEffect (() => {
        const getAksHome = async () => {
            setLoading(true)
            const res = await axios.get('http://127.0.0.1:8000/api/aks_mebel/?search=' + category)
            setAkshome(res.data)
            setLoading(false)
        }
        getAksHome()
    }, [category])

    const lastAksIndex = currentPage * aksPerPage // создаем переменную, в которой вычесляем индекс последнеюю страницу
    const firstAksIndex = lastAksIndex - aksPerPage  // вычесляем индекс первой страницы
    const currentAks = akshome.slice(firstAksIndex, lastAksIndex)   //вычесляем текущую страницу
    const [value, setValue] = useState('')  //создаем состояние в котором будем хранить данные с поиска

    const filteredAks = akshome.filter(aks => {
        return aks.name.toLowerCase().includes(value.toLowerCase())
    })  // создаем функцию которая будет искать то что мы ввели в списки нашей мебели

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage( prev => prev + 1)  //создаем кнопку следующая страница
    const prevPage = () => setCurrentPage( prev => prev - 1)  //создаем кнопку предыдущая страница

    return (
        <div className="box">
            <Navbar/>
            <Categories category={category} onClickCategory={(i) => setCategory(i)} />
            <form className="example" action="action_page.php">
              <input type="text" placeholder="Поиск..." className="search" onChange={(e) => setValue(e.target.value)}/>
              <button type="submit"><i className="fa fa-search">Найти</i></button>
            </form>
            {loading
                ? [...new Array(5)].map((_, index) => <Skeleton key={index} />)
                : currentAks.map((aks) => <AksHome aks={aks} key={aks.id} />)
            }
            <Pagination aksPerPage={aksPerPage} totalAks={akshome.length} paginate={paginate}/>
            <button className="btn-2" onClick={prevPage}>Предыдущая страница</button>
            <button className="btn-2" onClick={nextPage}>Следующая страница</button>
            <Info/>
            <Footer/>
        </div>
    )
}

export default AksMebel;

