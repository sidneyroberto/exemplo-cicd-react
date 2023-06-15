import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const WordCardPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 10px 10px 20px #ddd;
`

export const WordTitle = styled.h1`
  font-family: 'bold italic';
  margin-bottom: 10px;
`

export const WordDetailsLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`

export const WordDetailsText = styled.span`
  font-family: 'regular';
  font-size: 20px;
`
