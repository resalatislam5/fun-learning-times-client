import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/sheared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;