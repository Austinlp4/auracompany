import React from 'react';
import ReactContactForm from 'react-mail-form';
import styled from 'styled-components';

function Contact(){
    return(
        <ContactCont>
            <ReactContactForm to="apendergrast44@gmail.com" class="form"/>
        </ContactCont>
    )
}


const ContactCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 500px;
        width: 500px;
    }
    input{
        width: 500px;
        height: 30px;
        margin-bottom: 15px;
    }
    textarea{
        width: 500px;
        height: 150px;
        margin-bottom: 15px;
    }
    a{
        text-decoration: none;
        width: 150px;
        height: 60px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, .5);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(40, 146, 199);
        color: white;
    }
`;

export default Contact;