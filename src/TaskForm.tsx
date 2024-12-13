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

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      duedate: "",
      description: "",
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      duedate: this.state.duedate,
      description: this.state.description,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", duedate: "", description: "" });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  };

  dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ duedate: event.target.value });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ description: event.target.value });
  };

  inputRef = React.createRef<HTMLInputElement>();

  render() {
    return (
      <form onSubmit={this.addTask} className="space-y-4">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={this.state.title}
            onChange={this.titleChanged}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 text-gray-800"
            placeholder="Task title..."
          />
          <div className="flex gap-4">
            <input
              type="date"
              value={this.state.duedate}
              onChange={this.dateChanged}
              className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 text-gray-800"
            />
            <input
              type="text"
              value={this.state.description}
              onChange={this.descriptionChanged}
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
  }
}

export default TaskForm;
