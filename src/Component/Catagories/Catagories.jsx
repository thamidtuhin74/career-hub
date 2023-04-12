import React from 'react';
import Category from './Category/Category';

const Catagories = ({jobCatagories}) => {
    const categories = jobCatagories;
    return (
        <div className='container-wrapper py-32'>
            <h2 className='title'>Job Category List</h2>
            <p className='title-description pt-4 pb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="category_wrapper grid lg:grid-cols-4 gap-6">
                {
                    jobCatagories.map(category => <Category 
                        key={category.id}
                        singleCategory = {category}
                    ></Category>)
                }
            </div>

        </div>
    );
};

export default Catagories;