import React from 'react'
import styled from "styled-components"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-scale-.jpg" alt="" />
                {/* <img  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" /> */}
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg" alt="" />
            </Wrap>
            {/* <Wrap>
                <img src=" https://image.tmdb.org/t/p/original${item.backdrop_path})" alt="" />
            </Wrap> */}
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider) `
    margin-top: 20px;
    
    ul li button {
        &:before {
            font-size:10px;
            color: rgb(150, 158, 171);
            
        }

    }

    li.slick-active button:before {
        color:white;
    }
    
    .slick-list {
        
        overflow: visible;
    }
    button {
        
        z-index:1;
    }
    
`

const Wrap = styled.div`
    cursor: pointer;
    height: 250px;
    img {
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb( 0 0 0 / 73%) 0 px 16px 10px -10px;
        transition-duration: 300ms;

            &:hover {
                border: 4px solid rgba(249, 249, 249, 0.8);
            }
    }
` 