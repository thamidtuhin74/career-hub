import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCatagory from '../SingleCatagories/SingleCatagory';
import SingleFeatureJob from '../SingleFeatureJob/SingleFeatureJob';
import JobDetails from '../JobDetails/JobDetails';

const JobCatagories = () => {
    const jobCatagories=useLoaderData()
    // console.log(jobCatagories);
    const [FeaturesJob,setFeaturesJob]=useState([])
    useEffect(()=>{
        fetch('featuresjJob.json')
        .then(res=>res.json())
        .then(data=>setFeaturesJob(data))
    },[])

    const [showAll,SetShowAll]=useState(false)

    const handleShowAll=()=>{
        SetShowAll(true)
    }


  
    return (
        <div>
            <section>
            <div className='md:flex mx-10 my-10'>
                <div>
                    <p className='text-7xl'>One Step Closer To Your<br></br> <span className='font-bold text-7xl text-blue-700 '> Dream Job</span></p>
                    <p className='text-3xl mt-3'>Job opportunity means a job opening for temporary, full-time employment at a place in the U.S. to which a U.S. worker can be referred.</p>
                    <button className='btn btn-primary mt-5 mb-5'>Get Started</button>
                </div>

                <div>
                    <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1681057268~exp=1681057868~hmac=23851fda3693c98d67fb5d7a56a1d2f4dbe525cdeba8deb2ea925ceedc6ff484" alt="Human Image" />
                </div>
            </div>
            </section>
            <section >
                <p className='text-center text-5xl font-bold'>Job Category List</p>
                <p className='text-center text-2xl mt-2 mb-2'>Looking for work? Find Publications jobs.Create free email alerts and never miss another career opportunity again.</p>
            </section>
        <div className='grid gap-6 lg:grid-cols-4 sm:grid-cols-2 '>  
        {
            jobCatagories.map((singleCatagories)=> <SingleCatagory key={singleCatagories.id}singleCatagories={singleCatagories}></SingleCatagory>
            )
        }
            
        </div>
        <section >
                <p className='text-center text-5xl font-bold mt-4'>Featured Jobs</p>
                <p className='text-center text-2xl mt-2 mb-2'>See the following components: job title, job purpose, job duties and responsibilities, required qualifications, preferred qualifications, and working conditions.</p>
            </section>
        <div className='grid gap-6 lg:grid-cols-4 sm:grid-cols-2 mx-16 mt-5 mb-5 '> 
                {
                    FeaturesJob.slice(0,showAll ? 8:4 ).map((Features)=><SingleFeatureJob
                    Features={Features} key={Features.id} ></SingleFeatureJob>)
                }
            
            </div>
        
        {
            !showAll && <span  onClick={handleShowAll} className='flex items-center justify-center text-center'>
            <button  className='btn btn-primary text-center '>See All Jobs</button>
        </span>
        }
        {/* <JobDetails appliedForJobs={appliedForJobs}></JobDetails> */}
        </div>
    );
};

export default JobCatagories;