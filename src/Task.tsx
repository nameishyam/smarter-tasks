import TaskApp from "./TaskApp";
interface TaskProps {
  title: string;
  duedate: string;
  description: string;
}

const Task = (props: TaskProps) => {
  return (
    <>
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200">
        <h2 className="text-lg font-medium text-gray-800 mb-3">
          {props.title}
        </h2>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700 mr-2">Due Date:</span>
            {props.duedate}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700 mr-2">Description:</span>
            {props.description}
          </p>
          {/* <button
            className="text-sm text-gray-800 underline"
            onClick={TaskApp.deleteTask(0)}
          >
            Delete
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Task;
