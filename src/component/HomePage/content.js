import React from 'react'
import './style.css';
import Card from '../card/index';


const Content = ({ category, price, economyCars }) => {
    
    return (
        <>
            <div className='car-category'>
                <div className='category-name'>
                    <h2>
                        <span className='name section-one-label'>{category}</span>&nbsp;
                        <span className='per-day-price'>(from ${price}/day)</span>
                    </h2>
                </div>
            </div>
            <div className='car-section'>
                <Card economyCar={economyCars} />
                {/* <Card /> */}
                {/* <Card /> */}
            </div>
        </>
    )
}

export default Content