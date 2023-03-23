import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { Heading } from './TypographyComponents'

const StyledTitleCard = styled.div`
    background-image: linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%);
    padding: 2rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 2rem;
    border-radius: 0.5rem;`



function TitleCard({title}) {
  return (
    <StyledTitleCard title={title}>
        {title}
    </StyledTitleCard>

  )
}

export default TitleCard