import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Home/Shared/Footer/Footer';
import Header from '../Pages/Home/Home/Shared/Header/Header';

const main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default main;