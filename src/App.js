import React, {useState} from 'react';
import './assets/style/style.scss'
import Navbar from "./components/navbar/Navbar";
import Table from "./components/table/Table";
import Products from "./components/products/Products";
import Card from "./components/card/Card";
import basket from "./assets/images/basket.svg";

function App({store}) {

    const [cardActive, setCardActive] = useState(false);

    const changeCardActive = (bool) =>{
        setCardActive(bool);
    }

    return (
        <div className="wrapper">
            <Navbar allSum={14280000} daySum={3380500}/>
            <Table tableList={store.tableList}/>
            <Products productsList={store.productList}/>
            <Basket cardActive={cardActive} setCardActive={changeCardActive}/>
            <Card cardActive={cardActive} state={store.card}/>
        </div>
    );
}




function Basket({cardActive, setCardActive}) {
    return(
        <div className={cardActive ? "basket active" : "basket"} onClick={() => setCardActive(!cardActive)}>
            <div className="basket__logo">
                <img src={basket} alt=""/>
            </div>
            <p className="basket-text">
                Саватча
            </p>
        </div>
    )
}

export default App;