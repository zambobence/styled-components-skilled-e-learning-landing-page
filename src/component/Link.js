import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
    display: inline-block;
    color: ${({theme}) => theme.colors.link};
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 700;
    margin-top: 1.5rem;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`
function Link({children}) {
  return (
    <StyledLink>
        {children}
    </StyledLink>
  )
}

export default Link