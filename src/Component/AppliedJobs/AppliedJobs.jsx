import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import AppiliedJob from './AppliedJob/AppiliedJob';

const AppliedJobs = () => {

    const allJobs = useLoaderData();
    console.log('All data are here : ' + allJobs);

    const storedJobs = localStorage.getItem('shopping-Cart');
    const CstoredJob = JSON.parse(storedJobs);

    const objectArray = Object.entries(CstoredJob);//singel object
    const keyArray = [];

    objectArray.forEach(([key, value]) => {
    keyArray.push(key); 
    });
    console.log(keyArray); // 1

    const appliedJob = [];
    for(const id in allJobs){
        const addedJob = allJobs.find(Job=>allJobs.id===id);
        if(addedJob){
            appliedJob.push(addedJob);
        }
    }
    console.log('appliedJob : '+appliedJob);
    

    
    // const appliedJobs = getShoppingCart()
    // console.log('allready applied  jobs : '+ appliedJobs);
    
    // const arrayID = [...storedJobs];
    
    // console.log('ArrayId  : '+arrayID);


    return (
        <div className='container-wrapper'>
            {
                keyArray.map(id => <AppiliedJob key={id} id = {id} allJobs = {allJobs}></AppiliedJob>)
            }
            {/* <AppiliedJob ></AppiliedJob> */}
        </div>
    );
};

export default AppliedJobs;