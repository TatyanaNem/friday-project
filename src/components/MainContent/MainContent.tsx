import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import PageNotFound from '../UI/PageNotFound';
import Test from '../Test/Test';


const MainContent = () => {
    return (
        <Routes>
            <Route path={'/'} element={<div>main</div>} />
            <Route path={'/login'} element={<Login/>} />
            <Route path={'registration'} element={<Registration/>}/>
            <Route path={'/profile'} element={<div>profile</div>} />
            <Route path={'/test'} element={<Test/>} />
            <Route path={'*'} element={<PageNotFound/>} />
        </Routes>
    );
};

export default MainContent;