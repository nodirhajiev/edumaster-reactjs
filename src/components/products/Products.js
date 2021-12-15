import React from 'react';
import Product from "./Product";

function Products({productsList}) {
    return (
        <div className="products">
            <div className="container">
                {
                    productsList.map(item =>{
                        return(
                            <Product {...item} key={item.id}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Products;