import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
  const tasks = [
    {
      id: "task-1",
      title: "Купить молоко",
      isDone: false,
    },
    {
      id: "task-2",
      title: "Погладить кота",
      isDone: true,
    },
  ]

  const onDeleteAllTasksBtn = () => {
    console.log("Удаляем все таски")
  }

  const onDelteTaskBtn = (id) => {
    console.log(`Удалил задачу ${id}`)
  }

  const onAddTaskBtn = () => {
    console.log("Добавил Задачу")
  }

  const toggleTaskComplete = (id, isDone) => {
    console.log(`Задача ${id} ${isDone ? "выполнена" : "не выполнена"}`)
  }

  const filterTasks = (query) => {
    console.log(`Поиск ${query}`)
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm onAddTaskBtn={onAddTaskBtn} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllTasksBtn={onDeleteAllTasksBtn}
      />
      <TodoList
        tasks={tasks}
        onDelteTaskBtn={onDelteTaskBtn}
        onTaskCompliteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo
