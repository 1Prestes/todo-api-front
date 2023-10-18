import { Modal } from '@mui/material'

import { Container } from './styles'

interface ICustomModalProps {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

const CustomModal = ({ children, open, onClose }: ICustomModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Container>
        {children}
      </Container>
    </Modal>
  )
}

export default CustomModal
