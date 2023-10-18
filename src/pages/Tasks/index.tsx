import { useState, useEffect } from 'react'
import { Button, Typography } from '@mui/material'
import { useTheme } from 'styled-components'

import TodoList from "./components/TaskList"
import CreateTask from './components/CreateTask'
import { Container, Header } from "./styles"

const Tasks: React.FC = () => {
  const [openCreateTask, setOpenCreateTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const {
    color: {
      dark: {
        purple
      }
    }
  } = useTheme()

  const loadTasks = async () => {
    try {
      const result = await fetch('http://localhost:3000/api/tasks?limit=10&offset=0')
      const data = await result.json()

      setTasks(data)
    } catch (error) {
      console.log('DEU RUIM => ', error)
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <Container>
      <Header>
        <Typography variant='h5' color={purple}>Tarefas</Typography>
        <Button color="secondary" variant="contained" onClick={() => setOpenCreateTask(true)}>
          Nova tarefa
        </Button>
      </Header>

      <TodoList tasks={tasks} reload={loadTasks} />

      <CreateTask
        open={openCreateTask}
        handleClose={() => setOpenCreateTask(false)}
        onSuccess={() => {
          setOpenCreateTask(false)
          loadTasks()
        }}
      />
    </Container>
  )
}

export default Tasks
