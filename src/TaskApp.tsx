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
      <div className="container py-8 px-4 max-w-4xl mx-auto min-h-screen bg-gray-50">
        <h1 className="text-4xl mb-4 font-bold text-gray-700">Smarter Tasks</h1>
        <h2 className="text-lg mb-8 text-gray-600">
          <span className="font-semibold">Project: </span>
          Graduation Final Year Project (Revamp college website)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-gray-700 text-xl font-semibold text-center mb-4">
              Pending
            </h2>
            <TaskForm addTask={this.addTask} />
            <div className="mt-6">
              <TaskList tasks={this.state.tasks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskApp;
