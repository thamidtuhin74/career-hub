import React from 'react';

const Blog = () => {
    return (
        <div className='mx-20 mt-5'>
            <p  className='font-bold text-3xl'>Q:When should you use context API?</p>
            <p className='text-2xl'>Ans: The main things that Context API gives us the oppoutunity that allow your components to access global data and re-render when that global data is changed. Sending data through props to props is time conjumin and also takes time render.It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. </p>
            <p className='font-bold text-3xl'>Q:What is a custom hook?</p>
            <p className='text-2xl'>Ans:Hooks are reusable functions. When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</p>
            <p className='font-bold text-3xl'>Q:What is useRef?</p>
            <p className='text-2xl'>Ans:useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (ref)</p>
            <p className='font-bold text-3xl'>Q:What is useMemo?</p>
            <p className='text-2xl'>Ans:useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It helps in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
        </div>
    );
};

export default Blog;