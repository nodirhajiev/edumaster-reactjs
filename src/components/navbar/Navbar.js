import React from 'react';
import logo from '../../assets/images/logo.svg'

function Navbar({allPrice, daySum}) {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__row">
                    <div className="navbar__left">
                        <p className="navbar__left-text">бугунги сумма:</p>
                        <h3 className="navbar__left-price">{new Intl.NumberFormat("decimal").format(daySum)} сум</h3>
                        <p className="navbar__left-day">24 Май 2021</p>
                    </div>
                    <div className="navbar__logo">
                        <img src={logo} alt="logo__img"/>
                    </div>
                    <div className="navbar__right">
                        <p className="navbar__right-text">Умумий келган пул:</p>
                        <h3 className="navbar__right-title">{new Intl.NumberFormat("decimal").format(allPrice)} сум</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;