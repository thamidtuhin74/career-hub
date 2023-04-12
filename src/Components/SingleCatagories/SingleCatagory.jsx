import React from 'react';

const SingleCatagory = (props) => {
    // console.log(props);
    const { job_catagory, jobs_available, picture } = props.singleCatagories


    return (
        <div>
            <div className='bg-gray-300 mt-4 rounded-lg'>
                <img src={picture} alt="" className='h-20 w-20 pl-6 pt-4' />
                <p className='pl-6 mt-2 text-3xl'>{job_catagory}</p>
                <p className='pl-6 mt-2 text-2xl pb-4'>{jobs_available} jobs available</p>
            </div>


        </div>
    );
};

export default SingleCatagory;