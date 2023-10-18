import { useState } from 'react'
import { useTheme } from 'styled-components'
import { Box, Divider, Typography } from '@mui/material'

import CustomTextInput from '../../../../components/CustomTextInput'
import CustomButton from '../../../../components/CustomButton'
import CustomModal from '../../../../components/CustomModal'

interface ICreateTaskProps {
  open: boolean
  handleClose: () => void
  onSuccess: () => void
}

const CreateTask = ({ open, handleClose, onSuccess }: ICreateTaskProps) => {
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [description, setDescription] = useState('')
  const {
    color: {
      dark: {
        gunpowder
      }
    }
  } = useTheme()

  const clearFields = () => {
    setTitle('')
    setDescription('')
  }

  const closeModal = () => {
    clearFields()
    handleClose()
  }

  const handleCreateTask = async () => {
    setLoading(true)

    try {
      await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        body: JSON.stringify({
          title,
          description
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      clearFields()
      setLoading(false)
      onSuccess()
    } catch (error) {
      console.log('DEU RUIM => ', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <CustomModal
      open={open}
      onClose={closeModal}
    >
        <Typography variant="h6" component="h2">
          Criar Tarefa
        </Typography>

        <Divider color={gunpowder} />

        <CustomTextInput
          value={title}
          label="Título"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value)
          }}
          disabled={loading}
        />

        <CustomTextInput
          value={description}
          label="Descrição"
          variant="standard"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(event.target.value)
          }}
          disabled={loading}
        />

        <Box mt={4} sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
          <CustomButton
            sx={{ mr: 2 }}
            disabled={loading}
            variant="contained"
            color="primary"
            onClick={closeModal}
          >
            Cancelar
          </CustomButton>

          <CustomButton
            disabled={loading}
            variant="contained"
            color="secondary"
            onClick={handleCreateTask}
          >
            Criar
          </CustomButton>

        </Box>
    </CustomModal>
  )
}

export default CreateTask
