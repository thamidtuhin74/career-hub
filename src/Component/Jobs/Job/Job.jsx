import React from 'react';
import './Job.css'

const Job = ({job}) => {

    const {id, companyLogo,jobTitle,companyName,remote,location,salary} = job;

    return (
        <div className='single-job-wrapper p-10'>
            <img src={companyLogo} alt="" />
            <h2 className='pt-8 pb-2 text-2xl'>{jobTitle}</h2>
            <p>{companyName}</p>
            <div className="flex py-4">
                <button className='remoteORfulltime mr-6'>{remote?'remote':'onsite'}</button>
                <button className='remoteORfulltime'> Full Time</button>
            </div>
            <div className="locationANDsalary flex mr-6 text-xl">
                <p>{location}</p>
                <p>Salary : {salary}</p>
            </div>
            <button className='btn-view-details mt-6'>View Details</button>

            
        </div>
    );
};

export default Job;