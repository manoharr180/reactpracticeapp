import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react';
import Home from "./components/Skeleton/Home";
import Features from "./components/Features";

function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/features" element={<Features/>} />                
            </Routes>
        </Router>
    );
}

export default Routers;