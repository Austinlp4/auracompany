import React from 'react';
import background from '../images/backdrop-aura.png';
import styled from 'styled-components';
import computer from '../images/computer.png';
import phone from '../images/phone.png';
import design from '../images/design.png';
import globe from '../images/globe.png';


function Home(){
    return(
        <div>
            <Hero image={background}>
                <HeroCont>
                    <Cta>
                        <h1>Bringing Your </h1>
                        <h1>Ideas To </h1> 
                        <span>Life</span>
                        <Learn>Contact Us &#8594;</Learn>
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
                <Contenttwo>
                    <h2>
                        Web Design & <span>Development</span>
                    </h2>
                    <hr></hr><span><img src={computer} alt=""/></span><hr></hr>
                    <p>
                        Our team is dedicated on bringing you the best experience we know how.
                        We start our process with deep user testing and analyzing the target market.
                        We work side by side with you throughout the entire process, honing in on all or 
                        your needs and wants. 
                    </p>
                    <p>
                        After we have agreed on a suitable prototype, our development team works around the 
                        clock to gauruntee that your website or app works the way you need it to. We test all 
                        of the projects that we work on with thorough testing. 


                    </p>
                </Contenttwo>
            </Conttwo>
            <Contthree>
                <h2>What we can do for you</h2>
                <Services>
                    <div><img src={design} alt=""/></div>
                    <div><img src={globe} alt=""/></div>
                    <div><img src={phone} alt=""/></div>
                </Services>
            </Contthree>
        </div>
    )
}

const Services = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: rgb(31, 98, 130);
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: 75px;
            width: 75px;
        }
        box-shadow: 2px 2px 2px rgb(0, 0, 0, .5);
        &:hover{
            background: white;
            cursor: pointer;
        }
    }
`;

const Contthree = styled.div`
    height: 500px;
    background: linear-gradient(to right, #166a81, #2FC9DF);
    h2{
        color: white;
        font-size: 4rem;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 100px;
    }
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    align-items: center;
`;

const Contenttwo = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    align-items: center;
    h2{
        font-size: 3rem;
        span{
            color: rgb(40, 146, 199);
        }
    }
    img{
        height: 100px;
        width: 100px;
    }
    h3 {
        width: 60%; 
        text-align: center; 
        border-bottom: 1px solid #000; 
        line-height: 0.1em;
        margin: 10px 0 20px; 
        span{
            background:#fff; 
            padding:0 10px; 
        }
     } 
     p{
         width: 50%;
         margin-bottom: 30px;
         font-weight: bold;
         line-height: 26pt;
     }
     padding-bottom: 50px;
`;

const Conttwo = styled.div`
    background: white;
`;

const Bullet = styled.div`
    display: flex;
    color: white;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    span{
        color: white;
        font-wieght: bold;
    }
    align-items: center;
`;

const CircleCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    padding-top: 100px;
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
    @media(max-width: 1300px){
        width: 40px;
        height: 40px;
        font-size: .9rem;
        border: 2px solid white;
    }
    
`;

const Hero = styled.div`
    background-image: url(${props => props.image});
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Cta = styled.div`
    font-family: 'Roboto', sans-serif;
    color: white;
    line-height: .8;
    padding: 40px; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 160px;
    h1, span{
        font-size: 5rem;
        font-weight: lighter;
        margin: 0;
        margin-bottom: 40px;
    }
    span{
        color: lightblue;
        font-weight: bold;
    }
    @media(max-width: 1300px){
        padding-top: 160px;
        h1,span{
            font-size: 3rem;
        }
    }
`;

const Learn = styled.button`
    height: 75px;
    width: 250px;
    color: rgb(37, 104, 137);
    background-color: white;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    align-self: flex-start;
    @media(max-width: 1300px){
        height: 50px;
        width: 175px;
        font-size: 1rem;
        align-self: flex-start;
        margin-right: 0;
    }
`;

export default Home;