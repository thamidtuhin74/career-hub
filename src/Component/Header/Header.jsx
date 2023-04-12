import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { routerContext } from '../../main';

const Header = () => {
    // const [bars4 , setBars4] = useState(true);
    
    return (
        <div className="header-container pt-5">
            <div className='container-wrapper header-container-wrapper flex justify-between pt-0 items-center w-full'>
                <div className="logo ">
                    <Link to='/'><img className='h-16' src="/public/CPtutors-bg.png" alt="" /></Link>
                </div>
                <nav className='font-medium text-#f1f1f1 mr-10'>
                    <Link to="/">Home</Link>
                    <Link to="/statistic">Statistic</Link>
                    <Link to="/applied_jobs">Applied Jobs</Link>
                    <Link to="/blog">Blog</Link>

                </nav>
                <a href='#jobs'>
                    <button className='btn-start-apply rounded-md px-7 py-4 text-white'>
                        Start Apply
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Header;