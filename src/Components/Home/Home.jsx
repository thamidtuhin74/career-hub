import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
// import DreamJob from '../DreamJob/DreamJob';

const Home = () => {
    // const navigation = useNavigation();
    
    return (
        <div>
            <Header></Header>
            {/* <DreamJob></DreamJob> */}
            {/* <div>{navigation.state === "loading" ? "loading" : ""}</div> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;