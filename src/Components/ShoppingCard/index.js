import React from 'react';
import Img from '../Img';
import H1 from '../H1';
import Cost from '../Cost';
import "./style.css"
import Measurement from '../Measurement';


const ShoppingCard = (props) => {
    return (
        <div className='shoppingCard flex'>
            <Img/>
            <H1 style={{color:"#242424"}}>{props.info.h1}</H1>
            <Measurement />
            <Cost style={{color:"#FFFFFF"}}>{props.info.cost}</Cost>
        </div>
    );
}

export default ShoppingCard;
