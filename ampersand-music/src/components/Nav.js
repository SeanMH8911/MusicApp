import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion'
import Typewriter from './Typewriter'


const Nav = ({ onChange, placeHolder })=> {
    return (

        <StyledNav>
                <Logo>
                    <img src={'/images/Logo.png'} alt='logo'/>
                </Logo>
            <input  onChange={onChange} placeholder={placeHolder} type="text"/>
            <button>Search</button>
            <StyledPara><Typewriter /></StyledPara>
        </StyledNav>
    )
}

const StyledPara = styled(motion.div)`
margin-top:60px;
`
const StyledNav = styled(motion.nav)`
padding: 3rem 5rem;
text-align: center;
justify-content:center;
height:100vh;


input{
    width:30%;
    font-size:1.5rem;
    padding: 0.5rem; 
    border:none;
    
    box-shadow: 0px 0px 30px rgba(0,0,0,0.6);
    outline: none; 

    }
    button{
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
        padding-left:20px;
        background-color: rgba(0,0,0,0.4);
        color:white;
        border:none;
        outline: none;
        }
        button:hover {
            background-color: rgba(0,0,0,1);
            outline: none;
            
        }
        p{
            color:white;
        }
`


const Logo = styled(motion.div)`
display: flex;
justify-content:center;
padding:2rem;

color: black;
img{
    height:200px;
    width:200px;
}

`


export default Nav
