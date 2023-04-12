import React from 'react';

const JobCart = ({job,jobId}) => {
    if(job.id == jobId){

    }
    return (
        <div>
            <div className="logo">
                <img src="/src/assets/Logo/google-1-1 1.png" alt="" />
            </div>
            <div className="info">
                <h2>jobTitle</h2>
                <p>companyName</p>
                <div className="flex py-4">
                    <button className='remoteORfulltime mr-6'>{remote?'remote':'onsite'}</button>
                    <button className='remoteORfulltime'> Full Time</button>
                </div>
            </div>
            <div className="btn-view-details"></div>
        </div>
    );
};

export default JobCart;