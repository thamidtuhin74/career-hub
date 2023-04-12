import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CurrencyDollarIcon,MapPinIcon } from '@heroicons/react/24/solid'
const AppliedJobSingleData = ({ appliedJobsData }) => {
    // console.log(appliedJobsData);
    const {id, image, company_name, salary, location, job_title, job_description, job_responsibility, educational_requirement, job_experience, job_type, Remote_or_Onsite } = appliedJobsData

    return (
        <div className='flex justify-between mx-48 mt-5 mb-5 items-center border-solid border-2 border-sky-500 p-2'>
            <div className='flex'>
                <div>
                    <img src={image} alt="" className='object-cover h-56 w-56' />
                </div>
                <div className='ml-5'>
                    <p className='text-2xl'>{job_title}</p>
                    <p className='text-2xl mt-1 text-slate-400'>{company_name}</p>
                    <div className='flex '>
                        <p className='p-1 text-2xl bg-slate-400 rounded m-1'>{job_type}</p>
                        <p className='p-1 text-2xl bg-slate-400 rounded m-1'>{Remote_or_Onsite}</p>

                    </div>

                    <div className='flex gap-3 text-2xl mt-2 '>
                        <div className='flex '>
                            <><MapPinIcon className=" h-6 w-6 text-blue-500" />{location}</>
                        </div>
                        <div className='flex'>
                            <><CurrencyDollarIcon className="h-6 w-6 text-blue-500" />{salary}</>
                        </div>


                    </div>
                </div>

            </div>
            <div>
                <Link to={`/appliedJob/${id}`}><button className='btn btn-primary'>View Details</button></Link>
               
            </div>
        </div>
    );
};

export default AppliedJobSingleData;