import React, { useState } from 'react';
import JobCart from './JobCart/JobCart';

const AppiliedJob = ({keyArray,allJobs}) => {
    
    const jobId = keyArray;
    console.log(allJobs);
    // console.log(typeof(jobId));

    const savedJobs = [];

    console.log(keyArray);
    if(keyArray.length === 0){

    }
    else{
        keyArray.map(key =>{

        const id = parseInt(key);

        const addedJob = allJobs.find(Job=> Job.id === id);
        // console.log(addedJob);
        savedJobs.push(addedJob);

        })
    }

    console.log(savedJobs);

    return (
        <div className='container-wrapper'>
            hello
            {
                savedJobs.map(savedJob=><JobCart
                    key={savedJob.id}
                    savedJob = {savedJob}
                ></JobCart>)
                
            }
        </div>
    );
};

export default AppiliedJob;