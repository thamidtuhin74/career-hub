import React from 'react';
import { Link } from 'react-router-dom';

const JobCart = ({savedJob}) => {
    const {id, companyLogo,jobTitle,companyName,remote,location,salary} = savedJob;
    
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <div className="logo w-1/2">
                    <img src={companyLogo} alt="" />
                </div>
                <div className="info">
                    <h2>{jobTitle}</h2>
                    <p>{companyName}</p>
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