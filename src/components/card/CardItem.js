import React, {useState} from 'react';
import basket from "../../assets/images/basket.svg";
import card__logo__img from "../../assets/images/logo.svg";
import card__img2 from "../../assets/images/card-img2.png";
import card__delete from "../../assets/images/delete.svg";

function CardItem(props) {
    var [num, setNum] = useState(0)

    if (num <= 1) {
        num = 1;
    }

    var price = 180000 * num;

    const baskets = () =>{
        let cart = document.querySelector(".cart").classList.toggle("active")
        let card = document.querySelector(".card").classList.toggle("active")
    }
    let del = () => {
        let card = document.querySelector(".card__product")
        card.classList.add("active")
        let nothing = document.querySelector(".nothing").classList.add("active")
        let card__price = document.querySelector(".card__info")
        card__price.classList.add("active")
    }

    return (
        <div className="cart">
            <div className="basket" onClick={baskets}>
                <div className="basket__logo">
                    <img src={basket} alt=""/>
                </div>
                <p className="basket-text">
                    Саватча
                </p>
            </div>
            <div className="card">
                <div className="card__logo">
                    <img src={card__logo__img} alt="logo"/>
                </div>
                <div className="card__product">
                    <div className="card__img">
                        <img src={card__img2} alt="card-img1"/>
                    </div>
                    <div className="card__content">
                        <p className="card__bookname">
                            Устоз ва шогирд
                        </p>
                        <p className="card__authorname">
                            умиджон ишмухаммедов
                        </p>
                        <div className="card__state">
                            <p className="card__state-price">Количество:</p>
                            <div className="card__state-div">
                                <button onClick={()=>{setNum(num-1)}}>{'<'}</button>
                                <p className="card__state-num">{num}</p>
                                <button onClick={()=>{setNum(num+1)}}>{'>'}</button>
                            </div>
                        </div>
                    </div>
                    <div onClick={del} className="card__delete">
                        <img src={card__delete} alt=""/>
                    </div>
                </div>
                <div className="card__info">
                    <div className="card__info-items">
                        <p className="card__info-title">Барча китоблаp : <span>{num} та</span></p>
                        <p className="card__info-title">Чегирма: <span>-100 000 сум</span></p>
                        <p className="card__info-title">Етказиб бериш: <span>Бепул</span></p>
                        <p className="card__info-allPrice">жами:</p>
                        <p className="card__info-price">{new Intl.NumberFormat("decimal").format(price)} сум</p>
                    </div>
                </div>
                <div className="card__btn">
                    <button className="card__btn-btn">
                        <p>расмийлаштириш</p>
                    </button>
                </div>
            </div>
            <div className="nothing">
                <p className="nothing-text1">Саватча бўш</p>
                <p className="nothing-text2">Китобларни сотиб олиш учун, менюдан “Китоблар” бўлимига ўтишингизни таклиф этамиз</p>
            </div>
        </div>
    );
}

export default CardItem;