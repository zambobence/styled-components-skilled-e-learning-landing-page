import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import Icon from './Icon'
import {Heading, Paragraph} from './TypographyComponents'

const StyledCard = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: left;
  margin-bottom: 2rem;
  `
function Card({title, description, link, iconSrc}) {
  return (
    <StyledCard title={title} description={description} link={link} iconSrc={iconSrc}>
        {iconSrc && <Icon src={iconSrc} alt={'icon'} />}
        <Heading>
            {title}
        </Heading>
        <Paragraph>
            {description}        
        </Paragraph>
        <Link>
            {link}
        </Link>
    </StyledCard>
  )
}

export default Card