import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = () => {
  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };

  // const deleteTask = (index: number) => {
  //   const newTasks = taskAppState.tasks.filter((_, idx) => idx !== index);
  //   setTaskAppState({ tasks: newTasks });
  // };

  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Smarter Tasks
          </h1>
          <h2 className="text-lg text-gray-600 mb-8">
            <span className="font-medium">Project: </span>
            Todo Application
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-4">
              Pending Tasks
            </h2>
            <TaskForm addTask={addTask} />
            <div className="mt-8">
              <TaskList tasks={taskAppState.tasks} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskApp;
