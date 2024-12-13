import { useState } from "react";

function SampleComponent() {
  const [title, setTitle] = useState(() => {
    return "Hello World!";
  });
  console.log(title, "current state");
  const changeTitle = () => {
    setTitle("Hello React!");
  };
  return (
    <>
      <div>{title}</div>
      <button onClick={changeTitle}>click me!</button>
    </>
  );
}

export default SampleComponent;
