import styled from 'styled-components'

export const DetailsContainer = styled.div`
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DetailsTitle = styled.h1`
  font-family: 'bold';
  margin-bottom: 30px;
`

export const DetailsPanel = styled.div`
  width: 70%;
  padding: 20px;
  box-shadow: 10px 10px 30px #ccc;
  margin-bottom: 20px;
`

export const DetailsPanelTitle = styled.h2`
  font-family: 'bold';
  margin-bottom: 20px;
  text-align: center;
`

export const DetailsList = styled.ul`
  list-style-type: square;
`

export const DetailsMetadata = styled.li`
  font-family: 'italic';
  font-size: 20px;
`

export const AudioPlayer = styled.audio`
  display: block;
  width: 500px;
  margin: 10px auto;
`

export const BackButton = styled.button`
  width: 200px;
  background-color: #392e4a;
  color: white;
  font-family: 'bold';
  padding: 10px 20px;
  font-size: 25px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  height: 50px;
`
