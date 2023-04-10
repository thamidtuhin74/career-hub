import React, { useEffect, useState } from 'react';
import Job from './Job/Job';

const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('/public/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])


    return (
        <div className='container-wrapper pb-32'>
            <h2 className='title'>Featured Jobs</h2>
            <p className='title-description pt-4 pb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="category_wrapper grid grid-cols-2 gap-6">
                {
                    jobs.map(job => <Job
                        key = {job.id}
                        job = {job}
                    ></Job>)
                }
                
            </div>
            <div className='text-center '>
                <button className='btn-start-apply rounded-md px-7 py-4 text-white justify-center mt-10 mb-32'>See All Jobs</button>
            </div>

        </div>
    );
};

export default Jobs;