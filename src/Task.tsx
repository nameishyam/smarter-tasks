import { TaskItem } from "./types";

interface TaskProps {
  item: TaskItem;
  removeTask: (task: TaskItem) => void;
}

const Task = (props: TaskProps) => {
  const { item, removeTask } = props;
  return (
    <div className="TaskItem p-4 rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="mb-3 sm:mb-0">
          <a href={`/tasks/${item.id || ""}`} className="group">
            <h2 className="text-lg font-semibold text-slate-900 group-hover:underline">
              {item.title}
            </h2>
          </a>
          <p className="text-sm text-slate-500 mt-1">{item.duedate}</p>
          <p className="text-sm text-slate-500 mt-1">
            <span className="font-medium">Description:</span> {item.description}
          </p>
        </div>
        <button
          className="deleteTaskButton cursor-pointer flex items-center justify-center h-8 w-8 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 shadow-md"
          onClick={() => removeTask(item)}
          aria-label="Delete Task"
        >
          <span className="text-sm font-bold">✕</span>
        </button>
      </div>
    </div>
  );
};

export default Task;
