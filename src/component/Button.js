import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    display: block;
    margin: 2rem 0;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    ${({ type, theme }) => { 
        if (type==="header") return `background-color: ${theme.colors.heading}`;
        else if (type==="hero") return "background-image: linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)";
        else if (type==="footer") return "background-image: linear-gradient(180deg, #4851FF 0%, #F02AA6 100%)";
    }};
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1rem 1.2rem;
    font-weight: 700;
    border-radius: 2rem;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    `

function Button({ children, type}) {
  return (
    <StyledButton type={type}>
        {children}
    </StyledButton>
  )
}

export default Button