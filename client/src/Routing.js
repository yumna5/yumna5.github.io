import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import MusicPage from "./pages/MusicPage"

import 'bootstrap/dist/css/bootstrap.min.css'

const Routing = () => {
    return (
        <Routes>
            <Route path = "/" element = {<HomePage />} />
            <Route path = "/mymusic" element = {<MusicPage />} />
        </Routes>
    )
}
           
        
export default Routing;
