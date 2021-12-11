import React from "react"
import "./Product.css"

function Product() {
    return (
        <div className="product">

            <div className="product__info">
                <p>Iphone 13</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>56.88</strong>
                </p>
                <p className="product__rating">
                    <p>🌟</p>
                    <p>🌟</p>
                    <p>🌟</p>
                </p>
            </div>

            <img 
                    src="https://m.media-amazon.com/images/I/71o9IL9VVqL._AC_SX522_.jpg"
                    alt="product_photo"
            />

            <button>Add to basket</button>

        </div>
    )
}

export default Product
