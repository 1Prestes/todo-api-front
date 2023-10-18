import { CustomTextField } from './styles'


const CustomTextInput = ({ fullWidth = true, ...rest }) => {
  return (
    <CustomTextField
      {...rest}
      fullWidth={fullWidth}
      variant="standard"
    />
  )
}

export default CustomTextInput
