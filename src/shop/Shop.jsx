import "./style.css";
import React, { useState } from 'react';
import cart from "../../src/img/cart.png";
import nike from "../../src/img/nike.png";
import hm from "../../src/img/h&m.png";
import gucci from "../../src/img/gucci.png";


function Shop() {
    const [count, setCount] = useState(0);


    return (
    <div class = "white-box">
        <div className="flex">
            <h1>Shopping cart</h1>
            <img src={cart} alt="cart" className="cart" />
            <div>
                <button className="cycle">{count}</button>
            </div>
        </div>
        <div className="grey-box">
            <p className="item">3 item</p>
        </div>
        <div className="white">
            <div>
                <img src={nike} alt="nike" className="product"/>
            </div>
            <div className="ph">
                <h5>nike</h5>
                <p>superstar
                    8.5
                </p>
            </div>
            <div>
                <button className="red-button" onClick={() => setCount(count + 1)}>add to cart</button>
            </div>
        </div>
        <div className="grey-line"></div>
        <div className="white">
            <div>
                <img src={hm} alt="hm" className="product"/>
            </div>
            <div className="ph">
                <h5>H&M</h5>
                <p>T-shirt
                    S
                </p>
            </div>
            <div>
                <button className="red-button" onClick={() => setCount(count + 1)}>add to cart</button>
            </div>
        </div>
        <div className="grey-line"></div>
        <div className="white">
            <div>
                <img src={gucci} alt="gucci" className="product"/>
            </div>
            <div className="ph">
                <h5>gucci</h5>
                <p className="gucci">CG Marmont</p>
            </div>
            <div>
                <button className="red-button" onClick={() => setCount(count + 1)}>add to cart</button>
            </div>
        </div>
        <div className="grey-line"></div>
        <div className="grey-line-empty"></div>
        <div>
            <h4>TOTAL</h4>
            <button className="grey-button" > checkout </button>
        </div>
    </div>
    )
}

export default Shop;

