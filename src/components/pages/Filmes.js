import React from 'react';
import styled from "styled-components";
import Header from '../Header';
import ImgSlider from '../ImgSlider/ImgSlider';


function Filmes() {

    return (
        <Container>
            <Header />
            <ImgSlider />
        </Container>
    )
}

export default Filmes;


 const Container = styled.div`
 
 `