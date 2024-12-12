import React from "react";

interface TaskProps {
  title: string;
  duedate: string;
  description: string;
}

class Task extends React.Component<TaskProps> {
  render() {
    return (
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200">
        <h2 className="text-lg font-medium text-gray-800 mb-3">
          {this.props.title}
        </h2>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700 mr-2">Due Date:</span>
            {this.props.duedate}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700 mr-2">Description:</span>
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}

export default Task;
