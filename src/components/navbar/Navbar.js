import React from 'react';
import logo from '../navbar/LOGO.svg'

function Navbar({ daySum, allSum }) {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__row">
          <div className="navbar__left">
            <p className="navbar__left-text">Бугунги сумма:</p>
            <h3 className="navbar__left-price">
              {new Intl.NumberFormat('decimal').format(daySum)} сум
            </h3>
            <p className="navbar__left-day">24 Май 2021</p>
          </div>

          <div className="navbar__logo">
            <div className="navbar__logo-wrap">
              <img src={logo} alt="logo_img" />
            </div>
          </div>

          <div className="navbar__right">
            <p className="navbar__right-text">Умумий келган пул:</p>
            <h3 className="navbar__right-title">
              {new Intl.NumberFormat('decimal').format(allSum)} сум
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
