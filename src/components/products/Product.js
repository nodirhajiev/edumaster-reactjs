import React from 'react';
import ProductItem from "./ProductItem.js";
import product__img1 from "../../assets/images/Group 19.png"
import product__img2 from "../../assets/images/Group 22.png"

function Product(props) {
    const data = [
        {
            id:1,
            img: product__img1,
            name: "Устоз ва шогирд",
            desc: "На сайте Вы можете размещать фотографии как на текстовых страницах, так и создавать фотогалереи. Наша система управления позволяет автоматически уменьшать фотографии, и все же мы рекомендуем при работе с изображениями в графических редакторах пользоваться функцией «Сохранить для Web».",
            price: 180000,
        },
        {
            id:2,
            img: product__img2,
            name: "Молиявий бошкарув",
            desc: "На сайте Вы можете размещать фотографии как на текстовых страницах, так и создавать фотогалереи. Наша система управления позволяет автоматически уменьшать фотографии, и все же мы рекомендуем при работе с изображениями в графических редакторах пользоваться функцией «Сохранить для Web».",
            price: 150000,
        }
    ]

    return (
        data.map(item => {
            return (
                <ProductItem
                    key={item.id}
                    name={item.name}
                    img={item.img}
                    desc={item.desc}
                    price={item.price}
                />
            )
        })
    )
}

export default Product;