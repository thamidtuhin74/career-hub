import React from 'react';
import JobCart from './JobCart/JobCart';

const AppiliedJob = ({id,allJobs}) => {
    
    const jobId = id;
    console.log('JOBID: '+ jobId);
    const appliedJob = [];
    for(const id in allJobs){
        // console.log(allJobs[id].id);
        const addedJob = allJobs.find(Job=> {
            console.log('Job : '+Job.id)
            if(Job.id ===  jobId){
                console.log('Job ID match '+ allJobs[id]);
                appliedJob.push(allJobs[id]);
            }
        });
        console.log('added job : '+addedJob);
        // appliedJob.push(addedJob);
    }
    console.log('appliedJob : '+appliedJob);
    // console.log('j : '+id);
    return (
        <div>
            hello
            {

                appliedJob.map(job=><JobCart
                     key={job.id} 
                     job = {job}
                     jobId = {jobId}
                     ></JobCart>)

                // allJobs.map(job=>{
                //     if(job.id == jobId){
                //         console.log('true');
                //         <JobCart></JobCart>
                //     }
                // })
            }
        </div>
    );
};

export default AppiliedJob;