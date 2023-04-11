import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';

const AppliedJobs = () => {

    const allJobs = useLoaderData();
    console.log('All data are here : ' + allJobs);

    const storedJobs = localStorage.getItem('shopping-Cart');
    console.log('allready stored  jobs : '+ storedJobs);
    
    const appliedJobs = getShoppingCart()
    console.log('allready applied  jobs : '+ storedJobs);
    // const arrayID = [];
    const [arrayID, setArrayId] = useState([]);
    
    // for (let key of appliedJobs) {
        
    //     setArrayId(appliedJobs[key]);
    // }
    console.log('keys : '+arrayID);

    return (
        <div className='container-wrapper'>
            {
                // console.log()
            }
        </div>
    );
};

export default AppliedJobs;