

import React from 'react';
import{Routes, Route} from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login';
import Singin from '../components/singin';

const AllRoures = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/sing' element={<Singin/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    );
}

export default AllRoures;
