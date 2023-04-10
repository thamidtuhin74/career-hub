import React from 'react';
import "./Category.css"
const Category = ({singleCategory}) => {

    console.log(singleCategory);
    const {id, logo, category, numOfJobs} = singleCategory;


    return (
        <div className='single-catagroy-wrapper'>
            <img src={logo} alt="" />
            <h2 className='text-xl pt-8 pb-2'>{category}</h2>
            <p className='text-base'>{numOfJobs} Jobs Available</p>
        </div>
    );
};

export default Category;