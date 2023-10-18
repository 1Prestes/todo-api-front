import styled from 'styled-components'

export const Container = styled.div`
  max-width: 768px;
  margin: 50px auto;
  background-color: ${props => props.theme.color.dark.bunker};
  padding: 20px;
  border-radius: 5px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`
