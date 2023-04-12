import React from 'react';
import './Left.css'
import { useHref } from 'react-router-dom';

const Left = () => {
    return (
        <div className='left-info-container'>
            <h2 className='md:text-7xl text-xl font-bold'>One Step<br/> Closer To Your<br/><span>Dream Job</span> </h2>
            <p className='font-medium text-lg leading-8 py-7'>Explore thousands of job opportunities with all<br/> the information you need. Its your future. Come find it.<br/> Manage all your job application from start to finish.</p>
            <a href='#jobs'><button className='btn-start-apply rounded-md px-7 py-4 text-white'>
                Get Started
            </button></a>
            
        </div>
    );
};

export default Left;