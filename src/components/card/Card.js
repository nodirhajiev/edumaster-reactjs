import React from 'react';
import logo_img from '../navbar/LOGO.svg';
import card__delete from '../../assets/images/delete.svg';
import store from "../../store/store";


function Card({cardActive, state}) {

    return (
        <div className={cardActive ? "card active" : "card"}>
            <div className="card__logo">
                <img src={logo_img} alt="logo__img"/>
            </div>

            <div className="card__items">

                {
                    state.map(item => {
                        return (
                            <div className="card__item" key={item.id}>
                                <div className="card__item-img">
                                    <img src={item.img} alt="logo__img"/>
                                </div>

                                <div className="card__item-content">
                                    <h3 className="card__item-bookname">{item.name}</h3>
                                    <p  className="card__item-authorname">умиджон ишмухаммедов</p>
                                </div>
                                <div
                                    className="card__delete"
                                    onClick={() => store.dispatch({type: 'DELETE_TO_CARD',id:item.id})}
                                >
                                    <img src={card__delete} alt="delete_icon"/>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <div className="card__info">
                <div className="card__info-content">
                    <p>Барча китоблар (3 та) : <span>550 000 сум</span></p>
                    <p> Чегирма: <span>-100 000 сум</span></p>
                    <p>Етказиб бериш: <span>Бепул</span></p>
                </div>
                <div className="card__info-allPrice">
                    <span>жами:</span>
                    <h1>450 000 сум</h1>
                </div>
            </div>

            <div className="card__btn">
                <button>расмийлаштириш</button>
            </div>
        </div>
    );
}



export default Card;