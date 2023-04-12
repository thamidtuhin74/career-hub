import React from 'react';
import { Link } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';
import { CurrencyDollarIcon,MapPinIcon } from '@heroicons/react/24/solid'

const SingleFeatureJob = ({Features}) => {
    const {id,image,company_name,salary,location,job_title,job_description,job_responsibility,educational_requirement,job_experience,job_type,Remote_or_Onsite}=Features
    return (
        <div className='border-solid border-2 border-sky-500 p-2'>
            <img src={image} alt="" className='object-cover h-56 w-56' />
            <p className='text-2xl'>{job_title}</p>
            <p className='text-2xl mt-1 text-slate-400'>{company_name}</p>
            <div className='flex '>
                 <p className='p-1 text-2xl bg-slate-400 rounded m-1'>{job_type}</p>
                 <p className='p-1 text-2xl bg-slate-400 rounded m-1'>{Remote_or_Onsite}</p>

                 </div>
            
                 <div className='flex gap-3 font-bold mt-2 mb-2 '>
                        <div className='flex '>
                            <><MapPinIcon className=" h-6 w-6 text-blue-500" />{location}</>
                        </div>
                        <div className='flex'>
                            <><CurrencyDollarIcon className="h-6 w-6 text-blue-500" />{salary}</>
                        </div>


                    </div>
            <Link to={`JobDetails/${id}`}><button  className='btn btn-primary'>View Details</button></Link>

            
        </div>
    );
};

export default SingleFeatureJob;