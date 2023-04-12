import React from 'react';
import { Link } from 'react-router-dom';
import './JobCart.css'

const JobCart = ({savedJob}) => {
    const {id, companyLogo,jobTitle,companyName,remote,location,salary} = savedJob;
    
    return (
        <div className='single-job-wrapper flex justify-between items-center p-8'>
            <div className='flex items-center'>
                <div className="companyLogo mr-6 px-12 py-24 rounded-lg">
                    <img src={companyLogo} alt="" />
                </div>
                <div className="info">
                    <h2>{jobTitle}</h2>
                    <p className='mt-4 text-2xl font-thin'>{companyName}</p>
                    <div className="flex py-4">
                        <button className='remoteORfulltime mr-6'>{remote?'remote':'onsite'}</button>
                        <button className='remoteORfulltime'> Full Time</button>
                    </div>
                    <div className="locationANDsalary flex mr-6 text-xl">
                        <p>{location}</p>
                        <p>Salary : {salary}</p>
                    </div>
                </div>
            </div>
            
            
            <Link to={`/job_details/${id}`}><button className='btn-view-details mt-6'> View Details</button></Link>
            

        </div>
    );
};

export default JobCart;