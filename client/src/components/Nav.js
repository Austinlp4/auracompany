import React from 'react';
import styled from 'styled-components';
import logo from '../images/aurologo.png';
import { NavLink } from 'react-router-dom';

function Nav(){
    return(
        <Bar>
            <Logo>
                <img src={logo} alt=""/> 
                <h3>AURA</h3>
            </Logo>
            <Links>
                <NavLink>COMPANY</NavLink>
                <NavLink>EXPERTISE</NavLink>
                <NavLink>SERVICES</NavLink>
                <NavLink>PORTFOLIO</NavLink>
                <NavLink>CONTACT</NavLink>
            </Links>
        </Bar>
    )
}

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
    opacity: .6;
    position: fixed;
    top: 0;
    img{
        height: 60px;
        width: 60px;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
`;

const Links = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    margin-right: 200px;
    font-family: 'Roboto', sans-serif;
    a{
        text-decoration: none;
        color: white;
    }
`;

export default Nav;