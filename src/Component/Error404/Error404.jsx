import React from 'react';
import './Error404.css'

const Error404 = () => {
    return (
        <div className='container-wrapper error-404'>
            <img src="/public/404.jpg" alt=""/>
            <h3 className='font-extrabold text-9xl -mt-16'>Page Not Found</h3>
        </div>
    );
};

export default Error404;