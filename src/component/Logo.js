import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.div``

function Logo({src}) {

  return (
    <StyledLogo>
        <img src={src} alt='logo' />
    </StyledLogo>
  )
}

export default Logo