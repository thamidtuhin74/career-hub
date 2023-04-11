import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {

    const allJobs = useLoaderData();
    console.log('All data are here : ' + allJobs);

    return (
        <div className='container-wrapper'>
            This is Applied job page
        </div>
    );
};

export default AppliedJobs;