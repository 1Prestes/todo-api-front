import TaskItem from '../TaskItem'

interface TasksListProps {
  reload: () => void
  tasks: {
    id: number
    title: string
    completed: boolean
  }[]
}

const TaskList: React.FC<TasksListProps> = ({ reload, tasks }) => {
  return (
    <div>
      {tasks.map(task => (<TaskItem key={task.id} task={task} reload={reload} />))}
    </div>
  )
}

export default TaskList
