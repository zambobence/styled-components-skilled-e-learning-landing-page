import React from 'react'
import styled from 'styled-components'
import Img from './Img'
const StyledIcon = styled.div`
    width: fit-content;
    margin-top: -3.4rem;
    margin-bottom: 1rem;
`
function Icon({src}) {
  return (
    <StyledIcon src={src}>
        <Img src={src} alt='icon' />
    </StyledIcon>
  )
}

export default Icon