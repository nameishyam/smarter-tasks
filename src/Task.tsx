import React from "react";

interface TaskProps {
  title: string;
}

class Task extends React.Component<TaskProps> {
  render() {
    return (
      <div className="p-4 mb-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow transition-shadow">
        <h2 className="text-base font-semibold text-gray-700 mb-2">
          {this.props.title}
        </h2>
        <p className="text-sm text-gray-500 mb-1">
          Due Date: {this.props.duedate}
        </p>
        <p className="text-sm text-gray-500">
          Description: {this.props.description}
        </p>
      </div>
    );
  }
}

export default Task;
