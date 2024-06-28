import styled from 'styled-components'

const BgContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`

export default BgContainer
