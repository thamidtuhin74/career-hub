import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../Utilities/fakedb';

const JobDetails = () => {
    const JobDetails = useLoaderData()
    // console.log( JobDetails);
    const id = useParams()
    // console.log(id.JobDetailsID);
    
    const SingleJobDetails = JobDetails.find(singleCheck => singleCheck.id == id.JobDetailsID)
    
    const appliedForJobs=(id)=>{
      addToDb(id.JobDetailsID)

        
    }
    return (
        <div className='container-wrapper'>
            <div className='w-full flex items-center justify-center p-20 text-5xl bg-slate-200'>
                <p >Job Detaails</p>
            </div>
            <div className='grid md:grid-cols-3 gap-4  lg:mx-40  mt-5'>

                <div className='col-span-2'>
                    <p> <span className='font-bold' >Job Description:</span>  {SingleJobDetails.job_description}</p>
                    <p> <span className='font-bold' >Job Responsibility: </span> {SingleJobDetails.job_responsibility}</p>
                    <p className='mt-5 '> <span className='font-bold' >Educational Requirements:</span>  <br /> <span >
                        {SingleJobDetails.educational_requirement} </span> </p>
                    <p className='mt-5'> <span className='font-bold'>Experiences: </span> <br />{SingleJobDetails.job_experience}</p>

                </div>
                <div className='bg-slate-300 rounded p-4'>
                    <p className='font-bold border-b-4'>Job Details</p>
                    <p><span className='font-bold'>Salary :</span> {SingleJobDetails.salary}</p>
                    <p><span className='font-bold'>Job Title : </span>{SingleJobDetails.job_title}</p>
                    <p className='font-bold border-b-4 '>Contact Information</p>
                    <p><span className='font-bold'>Phone :</span>{SingleJobDetails.phone}</p>
                    <p><span className='font-bold'>Email :</span>{SingleJobDetails.email}</p>
                    <p><span className='font-bold'>Address</span>:{SingleJobDetails.address}</p>
                    <p onClick={()=>appliedForJobs(id)}><Link><button  className='btn btn-primary'>Apply Now</button></Link></p> 
                </div>

            </div>
        </div>

    );
};

export default JobDetails;