import React from 'react';
import background from '../images/backdrop-aura.png';
import styled from 'styled-components';

function Home(){
    return(
        <div>
            <Hero image={background}>
                <HeroCont>
                    <Cta>
                        <h1>Bringing Your </h1>
                        <h1>Ideas To </h1> 
                        <span>Life</span>
                    </Cta>
                    <CircleCont>
                       <Circle>1</Circle>
                       <Circle>2</Circle>
                       <Circle>3</Circle>
                       <Circle>4</Circle> 
                    </CircleCont>
                </HeroCont>
            </Hero>
        </div>
    )
}

const CircleCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0;
`;

const HeroCont = styled.div`
    display: flex;
    flex-direction: row;
    width: 60%;
    justify-content: space-evenly;
`;

const Circle = styled.div`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    border: 4px solid white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    z-index: 86;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Hero = styled.div`
    background-image: url(${props => props.image});
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Cta = styled.div`
    font-family: 'Roboto', sans-serif;
    color: white;
    line-height: .8;
    background: rgba(0,0,0, .3); 
    padding: 40px; 
    h1, span{
        font-size: 5rem;
        font-weight: lighter;
    }
    span{
        color: lightblue;
    }
    
`;

export default Home;