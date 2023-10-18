import { Button as MuiButton, styled as muiStyled } from '@mui/material'

export const Button = muiStyled(MuiButton)({
  "&.Mui-disabled": {
    color: "#c0c0c0"
  },
  "&.MuiButton-outlined.Mui-disabled": {
    background: "#e4e4e4",
    color: "#b7babf"
  },
  "&.MuiButton-contained.Mui-disabled": {
    background: "#eaeaea",
    color: "#c0c0c0"
  }
})
