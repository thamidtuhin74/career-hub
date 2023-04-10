import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import { useLoaderData } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';
// import { jobLoader } from '../../Loader/loadingData';




const Home = () => {

    const jobCatagories = useLoaderData();
    // console.log('Catagpry : '+jobCatagories);

    return (
        <div className='Home-container'>
            <Banner></Banner>
            <Catagories
                key={jobCatagories.id}
                jobCatagories = {jobCatagories}
            ></Catagories>
            <Jobs></Jobs>
            
        </div>
    );
};

export default Home;