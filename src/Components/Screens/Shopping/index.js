import React, { Component } from 'react';
import Header from '../../Header';
import ShoppingCard from '../../ShoppingCard';
import "./style.css"
import H1 from '../../H1';
import Cost from '../../Cost';
import Button from '../../Button';
import Images from '../../../Assets';
class Shopping extends Component {
    state={shopCard:[
        {id:1,h1:"Apple iPhone 11 Pro 256GB Memory",cost:"$499.99",src:Images.Img14},
        {id:2,h1:"Apple Airpods Wireless Bluetooth Headset",cost:"$89.99",src:Images.Img23},
        {id:3,h1:"Sony PlayStation 4 Pro White Version",cost:"$399.99",src:Images.Img6}
    ]}
    render() {
        return (
            <div className='shopping1 flex'>
                <Header />
                <H1>Back / Shopping Cart</H1>
                <dvi className="container flex">
                <section className='shoppingSection flex'>
                    {this.state.shopCard.map((item)=>{
                       return <ShoppingCard key={item.id} info={item} />
                    })}
                </section>
                <div className='sidbar flex'>
                    <H1>Subtotal (3) items</H1>
                    <Cost>$989.97</Cost>
                    <hr/>
                    <Button>Proceed to checkout</Button>
                </div>
                </dvi>
            </div>
        );
    }
}

export default Shopping;
