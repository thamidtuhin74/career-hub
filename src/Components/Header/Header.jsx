import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-blue-500'>

            <div className="container-wrapper navbar ">
                <div className=" navbar-start mx-10">
                   
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-white ">JobSearchHub</Link>
                </div>
                <div className=" navbar-center  lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Home</NavLink></li>
                        <li><NavLink to='/statistics' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Statistics</NavLink></li>
                        <li><NavLink to='/appliedJob' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}> Applied Jobs</NavLink></li>
                        <li><NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Blog</NavLink></li>
                    </ul>
                </div>
                <div className=" navbar-end mx-10">
                    <Link className="btn btn-primary">Star Applying</Link>
                </div>
            </div>

       



        </div>
    );
};

export default Header;