import React from 'react';
import './assets/style/style.scss';
import Navbar from "./components/navbar/Navbar";
import Table from "./components/table/Table";
import Product from "./components/products/Product"
import Card from "./components/card/Card";

function App() {
    return (
        <div className="wrapper">
            <Navbar allPrice = {14280000} daySum = {3380500}/>
            <Table/>
            <Product/>
            <Card/>
        </div>
    )
}

export default App