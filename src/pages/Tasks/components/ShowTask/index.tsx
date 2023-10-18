import { useState } from 'react'
import { Box, Checkbox, Chip, CircularProgress, FormControlLabel, Stack, Typography } from '@mui/material'

import Modal from '../../../../components/CustomModal'
import CustomTextInput from '../../../../components/CustomTextInput'
import CustomButton from '../../../../components/CustomButton'

interface TaskItemProps {
  open: boolean
  handleClose: () => void
  onUpdate: () => void
  task: {
    id: number
    title: string
    description?: string
    completed: boolean
  }
}

const ShowTask = ({ open, handleClose, onUpdate, task }: TaskItemProps) => {
  const [loading, setLoading] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [title, setTitle] = useState(task.title)
  const [completed, setCompleted] = useState(task.completed)
  const [description, setDescription] = useState(task.description)

  const closeModal = () => {
    setIsEdit(false)
    handleClose()
  }

  const handleCancel = () => {
    if (isEdit) {
      setTitle(task.title)
      setDescription(task.description)
      setCompleted(task.completed)
      setIsEdit(false)
    } else {
      closeModal()
    }
  }

  const handleUpdateTask = async () => {
    if (isEdit) {
      setLoading(true)

      try {
        await fetch(`http://localhost:3000/api/tasks/${task.id}`, {
          method: 'PUT',
          body: JSON.stringify({
            title,
            description,
            completed
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        setLoading(false)
        onUpdate()
        closeModal()
      } catch (error) {
        console.log('DEU RUIM => ', error)
      } finally {
        setLoading(false)
      }
    } else {
      setIsEdit(true)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompleted(event.target.checked)
  }

  return (
    <Modal
      open={open}
      onClose={closeModal}
    >
      <Stack direction="row" spacing={1} justifyContent="space-between">

        <Typography variant="h6" component="h2">
          {task.title}
        </Typography>

        <Chip label={task.completed ? 'Finalizada' : 'Em andamento'} color={task.completed ? 'warning' : 'success'} variant="outlined" />
      </Stack>

      {
        isEdit ?
          <>
            <CustomTextInput
              value={title}
              label="Título"
              variant="standard"
              disabled={loading}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(event.target.value)
              }}
            />

            <CustomTextInput
              value={description}
              label="Descrição"
              variant="standard"
              disabled={loading}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDescription(event.target.value)
              }}
            />

            <FormControlLabel
              sx={{
                mt: 2
              }}
              control={
                <Checkbox checked={completed} onChange={handleChange} />
              }
              label={completed ? 'Tarefa concluída' : 'Tarefa pendente'}
            />
          </> : <Typography variant="body1" component="p" mt={2}>
            {task.description}
          </Typography>
      }

      <Box mt={4} sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}>
        <CustomButton
          sx={{ mr: 2 }}
          variant="contained"
          color="primary"
          onClick={handleCancel}
          disabled={loading}
        >
          {isEdit ? 'Cancelar' : 'Voltar'}
        </CustomButton>

        <CustomButton
          variant="contained"
          onClick={handleUpdateTask}
          color="secondary"
          disabled={loading}
        >
          {loading && <CircularProgress sx={{ mr: 1 }} size={20} />}
          {isEdit ? 'Salvar' : 'Editar'}
        </CustomButton>
      </Box>
    </Modal>
  )
}

export default ShowTask
