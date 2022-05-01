import "./style.css"
import React from 'react';

const Subtotal = () => {
    return (
        <div className="subtotal flex">
            <div className="right flex">
                <span>Subtotal</span>
                <span>Tax</span>
                <span>Shipping</span>
                <span>Total</span>
            </div>
            <div className="left flex">
                <span>$589.98</span>
                <span>$2.53</span>
                <span>$0.00</span>
                <span>$592.51</span>
            </div>
        </div>
    );
}

export default Subtotal;
