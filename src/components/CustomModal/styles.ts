import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  background-color: ${props => props.theme.color.dark.bunker};
  top: 40%;
  left: 50%;
  padding: 20px;
  width: 400px;
  border: 2px solid #000;
  transform: translate(-50%, -50%);
  color: #fff;
`
