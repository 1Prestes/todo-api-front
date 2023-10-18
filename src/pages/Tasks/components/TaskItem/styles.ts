import styled from 'styled-components'
import { Typography } from '@mui/material'

interface IComponentProps {
  $completed: number
}

export const Item = styled.div<IComponentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  background-color: ${props => props.$completed ? props.theme.color.dark.scampi : props.theme.color.dark.gunpowder};
  padding: 10px;
  border-radius: 7px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    transform: scale(1.01);
  }
`

export const Title = styled(Typography) <IComponentProps>`
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
`
