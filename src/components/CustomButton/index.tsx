import { ComponentProps } from 'react'
import { ButtonOwnProps, CircularProgress } from '@mui/material'

import { Button } from './styles'

interface ICustomButtonProps extends ComponentProps<React.JSXElementConstructor<ButtonOwnProps>> {
  children: React.ReactNode
  loading?: boolean
  onClick?: () => void
}

const CustomButton = ({
  children,
  loading,
  ...rest
}: ICustomButtonProps) => {
  return (
    <Button
      {...rest}
      disabled={loading}
      variant="contained"
      onClick={rest.onClick}
    >
      {loading && <CircularProgress sx={{ mr: 1 }} size={20} />}
      {children}
    </Button>
  )
}

export default CustomButton
