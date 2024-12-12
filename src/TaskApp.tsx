import React from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface TaskAppProp {}

interface TaskAppState {
  tasks: TaskItem[];
}

class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
  constructor(props: TaskAppProp) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  addTask = (task: TaskItem) => {
    this.setState((state) => {
      return {
        tasks: [...state.tasks, task],
      };
    });
  };

  render() {
    return (
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
            <TaskForm addTask={this.addTask} />
            <div className="mt-8">
              <TaskList tasks={this.state.tasks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskApp;
