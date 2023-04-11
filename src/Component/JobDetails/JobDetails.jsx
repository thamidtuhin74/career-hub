import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './JobDetails.css'
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const JobDetails = () => {
    const job = useLoaderData();
    // console.log(job);

    const [appliedJobIDs, setAppliedJobID] = useState([]);
    
    const storedId = [];
    const applyNowHandler = (id) =>{
        storedId.push(...storedId,id);
        console.log(id);
        setAppliedJobID(id);
        addToDb(id);
        // useEffect
        console.log("StoredId are : "+appliedJobIDs);
        
    }
    

    // const [products, setProducts] = useState([]);
    // const[cart, setCart] = useState([]);

    // // useEffect(()=>{
    // //     fetch('products.json')
    // //     .then(res => res.json())
    // //     .then(data => setProducts(data))
    // // },[])

    // useEffect(()=>{
    //     const storedCart = getShoppingCart();
    //     console.log('storedCart: ',storedCart);
    //     const savedCart = [];
    //     //step-1: get id
    //     for(const id in storedCart){
    //         //step-2: get product details using id
    //         const addedProduct = products.find(product=>product.id===id);
    //         //step-3: set no of quantity that is added to cart 
    //         if(addedProduct){
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             //step-4: Add the addedProduct to the savedProduct
    //             savedCart.push(addedProduct);
    //         }
    //         console.log('addedProduct: ',addedProduct);
    //         console.log('savedCart: ',savedCart);
    //     }
    //     //step-5: set the cart
    //     setCart(savedCart)
    // },[products])
    // const handleAddToCart = (product) =>{
    //     // console.log(product);
    //     const newCart = [...cart,product];
        



    //     setCart(newCart);
    //     addToDb(product.id);
        
    // }



    const {id ,jobDescription,jobResponsibilities,educationalRequirements,experience,contact,location,salary,jobTitle} = job;


    return (
        <div className='container-wrapper  grid grid-cols-3 gap-6 py-32'>
            <div className="left col-span-2">
                <p className='mb-6'><span className='text-lg font-bold text-black'>Job Description : </span>{jobDescription}</p>
                <p className='mb-6'><span className='text-lg font-bold text-black pb-6 '>Job Responsibilities : </span>{jobResponsibilities}</p>
                <p className='mb-6'><span className='pb-6 text-lg font-bold text-black'>Educational Requirements : </span><br/>{educationalRequirements}</p>
                <p className='mb-6'><span className='text-lg font-bold text-black'>Experience : </span><br/>{experience}</p>
            </div>
            <div className="right">
                <div className="job-details-right-info p-8 rounded-lg mb-6">
                    <p className='text-lg font-bold text-black '>Job Details</p>
                    <hr className='my-6' />
                    <p><span className='text-lg font-bold text-black'>Salary : </span>{salary}</p>
                    <p className='my-4'><span className='text-lg font-bold text-black'>Title : </span>{jobTitle}</p>
                    <p className='text-lg font-bold text-black'>Job Details</p>
                    <hr className='my-6'/>
                    <p><span className='text-lg font-bold text-black'>Phone : </span>{contact.phone}</p>
                    <p className='my-4'><span className='text-lg font-bold text-black'>Email : </span>{contact.email}</p>
                    <p><span className='text-lg font-bold text-black'>Location : </span>{location}</p>
                </div>
                <Link to={'/applied_jobs'}><button className='btn-start-apply rounded-md px-7 py-4 ml-8 text-white' onClick={()=>applyNowHandler(id)}>Apply Now</button></Link>
            </div>
        </div>
    );
};

export default JobDetails;