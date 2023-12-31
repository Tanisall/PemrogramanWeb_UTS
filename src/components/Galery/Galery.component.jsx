import React from 'react'
import styled from 'styled-components';
import SliderComponent from './Slider';
import { Zoom } from 'react-awesome-reveal';

const Galery = () => {
  return (
    <Container id='myGalery'>
        <Zoom>
            <h1>My <span className="brand">Galery</span></h1>
            <p>Berpose dan tersenyum, karena setiap selfie adalah kisah kebahagiaan.</p>
        </Zoom>
        <Slide>
            <SliderComponent/>
        </Slide>
    </Container>
  )
}

export default Galery;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``