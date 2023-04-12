import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AppliedJobDetails = () => {
    const AppliedJobDetailsData = useLoaderData()
    const id =useParams()
    console.log(AppliedJobDetailsData);
    console.log(id);
    const SingleJobDetailsData = AppliedJobDetailsData.find(singleCheck => singleCheck.id == id.JobDetailsID)
    return (
        <div>
            <div className=' flex items-center justify-center p-20 text-5xl bg-slate-200'>
                <p >Job Detaails</p>
            </div>
            

            {/* ########################## Job Details Part ############# */}
            <div className='grid md:grid-cols-3 gap-4  mx-40  mt-5'>
                <div className='col-span-2'>
                    <p> <span className='font-bold' >Job Description:</span>  {SingleJobDetailsData.job_description}</p>
                    <p> <span className='font-bold' >Job Responsibility: </span> {SingleJobDetailsData.job_responsibility}</p>
                    <p className='mt-5 '> <span className='font-bold' >Educational Requirements:</span>  <br /> <span >
                        {SingleJobDetailsData.educational_requirement} </span> </p>
                    <p className='mt-5'> <span className='font-bold'>Experiences: </span> <br />{SingleJobDetailsData.job_experience}</p>

                </div>
                <div className='bg-slate-300 rounded p-4'>
                    <p className='font-bold border-b-4'>Job Details</p>
                    <p><span className='font-bold'>Salary :</span> {SingleJobDetailsData.salary}</p>
                    <p><span className='font-bold'>Job Title : </span>{SingleJobDetailsData.job_title}</p>
                    <p className='font-bold border-b-4 '>Contact Information</p>
                    <p><span className='font-bold'>Phone :</span>{SingleJobDetailsData.phone}</p>
                    <p><span className='font-bold'>Email :</span>{SingleJobDetailsData.email}</p>
                    <p><span className='font-bold'>Address</span>:{SingleJobDetailsData.address}</p>

                </div>
            </div>

        </div>
    );
};

export default AppliedJobDetails;