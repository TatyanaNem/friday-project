import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import MainContent from './components/MainContent/MainContent';

function App() {
    return (
        <div className="App">
            <Header/>
            <MainContent/>
        </div>
    );
}

export default App;
