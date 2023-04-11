import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './JobDetails.css'
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job);

    const [appliedJobIDs, setAppliedJobID] = useState([]);
    useEffect(()=>{
        
        console.log(appliedJobIDs)
    },[appliedJobIDs]);
    

    const applyNowHandler = (appliedJobId) =>{

        console.log(appliedJobId);
        setAppliedJobID(appliedJobId);
        // addToDb(appliedJobIDs);
        // useEffect
        
    }


    const {id ,jobDescription,jobResponsibilities,educationalRequirements,experience,contact,location,salary,jobTitle} = job;
    return (
        <div className='container-wrapper  grid grid-cols-3 gap-6 py-32'>
            <div className="left col-span-2">
                <p className='mb-6'><span className='text-lg font-bold text-black'>Job Description : </span>{jobDescription}</p>
                <p className='mb-6'><span className='text-lg font-bold text-black pb-6 '>Job Responsibilities : </span>{jobResponsibilities}</p>
                <p className='mb-6'><span className='pb-6 text-lg font-bold text-black'>Educational Requirements : </span><br/>{educationalRequirements}</p>
                <p className='mb-6'><span className='text-lg font-bold text-black'>Experience : </span><br/>{experience}</p>
            </div>
            <div className="right">
                <div className="job-details-right-info p-8 rounded-lg mb-6">
                    <p className='text-lg font-bold text-black '>Job Details</p>
                    <hr className='my-6' />
                    <p><span className='text-lg font-bold text-black'>Salary : </span>{salary}</p>
                    <p className='my-4'><span className='text-lg font-bold text-black'>Title : </span>{jobTitle}</p>
                    <p className='text-lg font-bold text-black'>Job Details</p>
                    <hr className='my-6'/>
                    <p><span className='text-lg font-bold text-black'>Phone : </span>{contact.phone}</p>
                    <p className='my-4'><span className='text-lg font-bold text-black'>Email : </span>{contact.email}</p>
                    <p><span className='text-lg font-bold text-black'>Location : </span>{location}</p>
                </div>
                <Link to={'/applied_jobs'}><button className='btn-start-apply rounded-md px-7 py-4 ml-8 text-white' onClick={()=>applyNowHandler(id)}>Apply Now</button></Link>
            </div>
        </div>
    );
};

export default JobDetails;