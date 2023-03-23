import React from 'react'
import styled from 'styled-components'
const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
function Nav({children}) {
  return (
    <StyledNav>
        {children}
    </StyledNav>
  )
}

export default Nav