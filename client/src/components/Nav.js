import React from 'react';
import styled from 'styled-components';
import logo from '../images/aurologo.png';
import { NavLink } from 'react-router-dom';

function Nav(){
    return(
        <Bar>
            <Cont>
            <Logo>
                <img src={logo} alt=""/> 
                <h3>AURA</h3>
            </Logo>
            <Links>
                <NavLink>COMPANY</NavLink>
                <NavLink>EXPERTISE</NavLink>
                <NavLink>SERVICES</NavLink>
                <NavLink>PORTFOLIO</NavLink>
                <NavLink to='/contact'>CONTACT</NavLink>
            </Links>
            </Cont>
        </Bar>
    )
}

const Cont = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    @media(max-width: 1300px){
        width: 80%;
    }
`;

const Logo = styled.div`
    color: white;
    width: 130px;
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    font-size: 1.2rem;
    align-items: center;
`;

const Bar = styled.div`
    width: 100%;
    height: 70px;
    background: black;
    position: fixed;
    top: 0;
    img{
        height: 60px;
        width: 60px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 90;
    opacity: .8;
`;

const Links = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    align-items: center;
    a{
        text-decoration: none;
        color: white;
    }
    a:nth-child(5){
        border: 1px solid white;
        padding: 4px;
        &:hover{
            background: white;
            color: rgb(0,0,0);
        }
    }
`;

export default Nav;