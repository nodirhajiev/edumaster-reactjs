import React, {useState} from 'react';
import store from "../../store/store";

function Product(props) {

    const [count, setCount] = useState(1);

    const increment = () =>{
        setCount(count + 1);
    }

    const decrement = () =>{
        if(count <= 1){
            setCount(1);
        }else{
            setCount(count - 1);
        }
    }

    let price = props.price * count;

    let cardItem = {
        desc: props.desc,
        id: props.id,
        img: props.img,
        name: props.name,
        price: price,
        count: count,
    }

    return (
        <div className="product">
            <div className="product__row">
                <div className="product__left">
                    <div className="product__img">
                        <img src={props.img} alt="product__img"/>
                    </div>

                    <div className="product__content">
                        <h3>{props.name}</h3>
                        <p>{props.desc}</p>
                    </div>
                </div>

                <div className="product__right">
                    <div className="product__price">
                        <h3>{new Intl.NumberFormat('decimal').format(price)} сум</h3>
                    </div>
                    <div className="product__count">
                        <span className='product__count-text'>Количество:</span>
                        <div className="product__countable">
                            <button onClick={decrement}>{'<'}</button>
                            <span>{count}</span>
                            <button onClick={increment}>{'>'}</button>
                        </div>
                    </div>
                    <div className="product__btn" onClick={() => store.dispatch({type: 'ADD_TO_CARD', item: cardItem})}>
                        саватчага қўшиш
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;