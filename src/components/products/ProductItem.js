import React, {useState} from 'react';
import "../card/CardItem";

function ProductItem(props) {
var [num, setNum] = useState(0)

    if (num <= 1) {
        num = 1;
    }

    var price = props.price * num;

function basket() {
    let card = document.querySelector(".card__product")
    card.classList.remove("active")
    let nothing = document.querySelector(".nothing").classList.remove("active")
    let card__price = document.querySelector(".card__info")
    card__price.classList.remove("active")
    alert("Savatchaga qo'shildi")
}

    return (
        <div className='products'>
            <div className="product">
                <div className="container">
                    <div className="product__row">
                        <div className="product__left">
                            <div className="product__img">
                                <img src={props.img} alt="product__img1"/>
                            </div>
                            <div className="product__content">
                                <p className="product__content-item1">{props.name}</p>
                                <p className="product__content-item2">{props.desc}</p>
                            </div>
                        </div>
                        <div className="product__right">
                            <div className="product__price">
                                <p>{new Intl.NumberFormat("decimal").format(price)} сум</p>
                            </div>
                            <div className="product__state">
                                <p className="product__state-price">Количество:</p>
                                <div className="product__state-div">
                                    <button onClick={()=>{setNum(num-1)}}>{'<'}</button>
                                    <p className="product__state-num">{num}</p>
                                    <button onClick={()=>{setNum(num+1)}}>{'>'}</button>
                                </div>
                            </div>
                            <div className="product__btn">
                                <button  onClick={basket}>
                                    <p>саватчага қўшиш</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;