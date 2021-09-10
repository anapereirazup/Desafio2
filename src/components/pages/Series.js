
import React from 'react';
import Header from '../Header';
import ImgSlider from '../ImgSlider/ImgSlider';
// import Tmdb from '../../features/Tmdb';
// import MoviesRow from '../MoviesRow/index';
// import FeaturedMovie from '../FeaturedMovie/index'
import {  BrowserRouter } from "react-router-dom";
function Series() {

    return (
        <BrowserRouter>
            <Header />
            <ImgSlider />
            <h1>netflix</h1>
        </BrowserRouter>
        
    )
}

 export default Series;


 