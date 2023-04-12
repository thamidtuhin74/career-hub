import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFeatureJob from '../SingleFeatureJob/SingleFeatureJob';

const FeaturesJob = () => {
    const FeaturesJob=useLoaderData()
    // console.log(FeaturesJob);
    return (
        <div>
            <div className='grid gap-6 md:grid-cols-3 sm:grid-cols-2 mx-16 '> 
                {
                    FeaturesJob.map((singleFeatureJob)=><SingleFeatureJob
                    key={singleFeatureJob.id}
                    singleFeatureJob={singleFeatureJob}></SingleFeatureJob>)
                }
            
            </div>
            </div>
        
    );
};

export default FeaturesJob;