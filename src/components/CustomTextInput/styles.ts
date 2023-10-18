import { TextField, styled as muiStyled } from '@mui/material';

export const CustomTextField = muiStyled(TextField)({
  marginTop: 20,
  input: {
    color: '#E0E3E7',
  },
  label: {
    color: '#6F7E8C',
  },
  border:'red',

  '& .css-l4u8b9-MuiInputBase-root-MuiInput-root:before': {
    borderBottomColor: '#B2BAC2',
  },
  'label.Mui-focused': {
    color: '#A0AAB4',
  },
  'label.Mui-disabled': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInputRoot': {
    '& fieldset': {
      borderColor: '#E0E3E7',
  },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
})
