import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container-wrapper grid md:grid-cols-2 gap-6 py-16'>
            <div className="qun-ans bg-yellow-100 p-5 rounded-lg">
                <h2 className='pb-4'>When should you use context API?</h2>
                <p>
                    <span>Answer: </span>
                    context API is a solution for sending data without props.When some data needs to be accessible by many components at different nesting levels.<br/>
                    It helps us to access or transfer data without props within the component in any level of the tree.
                </p>
            </div>
            <div className="qun-ans bg-pink-100 p-5 rounded-lg">
                <h2 className='pb-4'>What is Custom hook?</h2>
                <p>
                    <span>Answer: </span>
                    A special JavaScript function whose name starts with 'use' and can be used to call other hooks like: useColor, useMarker etc. <br />
                    Instead of writing the same code across multiple components that use the same common stateful logic (say a “setState” or localStorage logic), we can put that code inside a custom hook and reuse it. <br /> 
                    Shortly : The main reason to write a custom hook is for code reusability.
                </p>
            </div>
            <div className="qun-ans bg-blue-100 p-5 rounded-lg">
                <h2 className='pb-4'>What is useRef?</h2>
                <p>
                    <span>Answer: </span>
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.<br/>
                    The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. Think it like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.
                </p>
            </div>
            <div className="qun-ans bg-green-100 p-5 rounded-lg">
                <h2 className='pb-4'>What is useMemo?</h2>
                <p>
                    <span>Answer: </span>
                    useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations. It Memoize a function within a functional component. <br />
                    useMemo() take two arguments in its parameter. These arguments are an array of dependencies and some functions whose output you want to cache. By default, the useMemo hook will execute the function you passed as an argument after the initial render.
                </p>
            </div>
        </div>
    );
};

export default Blog;