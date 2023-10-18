import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

import ShowTask from '../ShowTask'
import { Item, Title } from './styles'

interface TaskItemProps {
  reload: () => void
  task: {
    id: number
    title: string
    description?: string
    completed: boolean
  }
}

const TaskItem: React.FC<TaskItemProps> = ({ reload, task }) => {
  const [showTask, setShowTask] = useState(false)

  const handleDeleteTask = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    try {
      await fetch(`http://localhost:3000/api/tasks/${task.id}`, {
        method: 'DELETE'
      })
      reload()
    } catch (error) {
      console.log('DEU RUIM => ', error)
    }
  }

  return (
    <>
      <Item onClick={() => setShowTask(true)} $completed={task.completed ? 1 : 0}>
        <Title $completed={task.completed ? 1 : 0} ml={1}>{task.title}</Title>

        <IconButton onClick={handleDeleteTask}>
          <DeleteIcon color="error" />
        </IconButton>
      </Item>

      <ShowTask open={showTask} handleClose={() => setShowTask(false)} task={task} onUpdate={reload} />
    </>
  )
}

export default TaskItem
