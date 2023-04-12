import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import AppiliedJob from './AppliedJob/AppiliedJob';

const AppliedJobs = () => {

    const allJobs = useLoaderData();
    console.log('All data are here : ' + allJobs);
    //getting appliedJobs
    const storedJobs = localStorage.getItem('applied-job');
    const CstoredJob = JSON.parse(storedJobs);

    if(!CstoredJob){
        console.log('Epmty Array');
    }
    // const objectArray = Object.entries(CstoredJob);//singel object
    const keyArray = [];

    // handling Error : Cannot convert undefined or null to object

    if(CstoredJob){
        const objectArray = Object.entries(CstoredJob);
        objectArray.forEach(([key, value]) => {
            keyArray.push(key); 
            });
            console.log(keyArray); 
        
            const appliedJob = [];
            for(const id in allJobs){
                const addedJob = allJobs.reduce(Job=>allJobs.id===id);
                if(addedJob){
                    appliedJob.push(addedJob);
                }
            }
            console.log('appliedJob : '+appliedJob);
    }

    


    return (
        <div className='container-wrapper'>

            <AppiliedJob 
            key={allJobs.id} 
            keyArray = {keyArray}
            allJobs = {allJobs}
             ></AppiliedJob>
        </div>
    );
};

export default AppliedJobs;