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
                        <Bullet>
                            <Circle>1</Circle>
                            <h4>
                                Fully <span>responsive</span> web applications
                            </h4>
                        </Bullet>
                        <Bullet>
                            <Circle>2</Circle>
                            <h4>
                                <span>Customized</span> designs for mobile friendly websites
                            </h4>
                        </Bullet>
                        <Bullet>
                            <Circle>3</Circle>
                            <h4>
                                Contact us for a <span>FREE</span> consultation!
                            </h4>
                        </Bullet>
                        <Bullet>
                            <Circle>4</Circle>
                            <h4>
                                Don't pay until <span>YOU</span> are fully satisfied!
                            </h4>
                        </Bullet>
                    </CircleCont>
                </HeroCont>
            </Hero>
            <Conttwo>

            </Conttwo>
        </div>
    )
}

const Conttwo = styled.div`
    height: 420px;
    background: white;
`;

const Bullet = styled.div`
    display: flex;
    color: white;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    span{
        color: blue;
    }
    align-items: center;
`;

const CircleCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    background: black;
    opacity: .6;
`;

const HeroCont = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: center;
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
    margin-right: 15px;
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
    background: rgba(0,0,0, .8); 
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