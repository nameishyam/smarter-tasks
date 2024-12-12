import React from "react";

interface TaskProps {
  title: string;
}

class Task extends React.Component<TaskProps> {
  render() {
    return <div className="text-lg mx-auto w-64">{this.props.title}</div>;
  }
}

export default Task;
