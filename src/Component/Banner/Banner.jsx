import React from 'react';
import './Banner.css'
import Left from './Left/Left';
import Right from './Right/Right';

const Banner = () => {
    return (
        <div className='Banner-container '>
            <div className="container-wrapper flex justify-between flex-row ">
                <div className="left-info">
                    <Left></Left>
                </div>
                <div className="right-info">
                    <Right></Right>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;