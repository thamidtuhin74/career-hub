import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../Utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';
import AppliedJobSingleData from '../AppliedJobSingleData/AppliedJobSingleData';

const AppliedJob = () => {
    // const cartData = useLoaderData()
    const jobCart = getShoppingCart()
    const [cartData,SetcartData]=useState([])
    const [originalData, setOriginalData] = useState([]);
    useEffect(()=>{
        fetch('featuresjJob.json')
        .then(res=>res.json())
        .then(data=>{
            SetcartData(data)
            setOriginalData(data)
        })
    },[])
    
const RemoteFilter=()=>{
    const FinalAplliedData = []
    for (const id in jobCart) {
        const FoundCartData = originalData.find(SingleAppliedData => SingleAppliedData.id == id)
        if (FoundCartData.Remote_or_Onsite == "Remote") {
            FinalAplliedData.push(FoundCartData)
        }
    }
    SetcartData(FinalAplliedData);

   

}

const OnsiteFilter=()=>{
    const FinalAplliedData = []
    for (const id in jobCart) {
        const FoundCartData = originalData.find(SingleAppliedData => SingleAppliedData.id == id)
        if (FoundCartData.Remote_or_Onsite == "Onsite") {
            FinalAplliedData.push(FoundCartData)
        }
    }
    SetcartData(FinalAplliedData);
}



    const FinalAplliedData = []
    for (const id in jobCart) {
        const FoundCartData = cartData.find(SingleAppliedData => SingleAppliedData.id == id)
        if (FoundCartData) {
            FinalAplliedData.push(FoundCartData)
        }
    }
    
    // console.log(FinalAplliedData);

    return (
        <div>
            <div className=' flex items-center justify-center p-20 text-5xl bg-slate-200'>
                <p >Applied Jobs</p>
            </div>
            {/* ########################## Filter Part ############# */}
            <div className="dropdown dropdown-bottom flex justify-end mx-10">
                <label tabIndex={0} className="btn btn-primary m-1">Filter By</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={RemoteFilter}><Link to=''>Remote</Link></li>
                    <li onClick={OnsiteFilter}><Link to=''>Onsite</Link></li>
                </ul>
            </div>
            {
                FinalAplliedData.map((appliedJobsData) => <AppliedJobSingleData
                    appliedJobsData={appliedJobsData}
                    key={appliedJobsData.id}></AppliedJobSingleData>)
            }
        </div>
    );
};

export default AppliedJob;