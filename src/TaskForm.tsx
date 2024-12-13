import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  duedate: string;
  description: string;
}

const TaskForm = (props: TaskFormProps) => {
  const [formState, setFormState] = React.useState<TaskFormState>({
    title: "",
    duedate: "",
    description: "",
  });

  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState({ ...formState, title: event.target.value });
  };

  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormState({ ...formState, description: event.target.value });
  };

  const duedateChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormState({ ...formState, duedate: event.target.value });
  };

  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.title.length === 0 || formState.duedate.length === 0) {
      return;
    }
    props.addTask(formState);
    setFormState({ title: "", description: "", duedate: "" });
  };

  return (
    <form onSubmit={addTask} className="space-y-4">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={formState.title}
          onChange={titleChanged}
          className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 text-gray-800"
          placeholder="Task title..."
        />
        <div className="flex gap-4">
          <input
            type="date"
            value={formState.duedate}
            onChange={duedateChanged}
            className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 text-gray-800"
          />
          <input
            type="text"
            value={formState.description}
            onChange={descriptionChanged}
            className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 text-gray-800"
            placeholder="Description..."
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-200"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
