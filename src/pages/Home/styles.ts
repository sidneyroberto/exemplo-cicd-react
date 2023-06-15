import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px;
`

export const SearchPanel = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

export const SearchInput = styled.input.attrs({ type: 'text' })`
  width: 400px;
  height: 35px;
  padding: 5px;
  text-align: center;
  font-size: 20px;
  font-family: 'regular';
  border: 2px solid #aaa;
  margin-right: 20px;
`

export const SearchButton = styled.input.attrs({ type: 'button' })`
  background-color: #392e4a;
  color: white;
  font-family: 'bold';
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  width: 150px;
`

export const ResultsFoundMessage = styled.span`
  font-family: 'regular';
  font-size: 15px;
  margin-bottom: 10px;
`

export const NoResultsFoundMessage = styled.span`
  font-family: 'bold';
`
