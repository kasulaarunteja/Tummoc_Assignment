

import React from 'react';
import{Routes, Route} from "react-router-dom";
import Login from '../components/Login';
import Singin from '../components/singin';

const AllRoures = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/sing' element={<Singin/>}/>
        </Routes>
    );
}

export default AllRoures;
