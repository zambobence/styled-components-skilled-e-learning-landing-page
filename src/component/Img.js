import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.div`
  img {
    display: block;
    width: 100%;
  }
  `

function Img({src, alt}) {
  return (
    <StyledImg>
        <img src={src} alt={alt} />
    </StyledImg>
  )
}

export default Img