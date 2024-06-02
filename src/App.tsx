import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React 5回目</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="text-blue-600 font-bold text-5xl ">Hello Tailwind</p>
      </div>
    </>
  );
}

export default App;
