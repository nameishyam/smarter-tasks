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
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ duedate: new Date(event.target.value) });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };

  inputRef = React.createRef<HTMLInputElement>();

  render() {
    return (
      <form onSubmit={this.addTask} className="flex gap-2">
        <input
          type="text"
          value={this.state.title}
          onChange={this.titleChanged}
          className="flex-grow px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          placeholder="Add a task..."
        />
        <input
          type="date"
          value={this.state.duedate}
          onChange={this.dateChanged}
          className="flex-grow px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          placeholder="Due Date..."
        />
        <input
          type="text"
          value={this.state.description}
          onChange={this.descriptionChanged}
          className="flex-grow px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          placeholder="Description..."
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm text-white bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          Add
        </button>
      </form>
    );
  }
}

export default TaskForm;
