import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/users/42")
      .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data)
        })
        
  }, [])

  return (
    <div className="App">
      <p> {!data ? "Loading..." : data.firstName} </p>
      <p> {!data ? "Loading..." : data.lastName} </p>
      <p> {!data ? "Loading..." : data.age} </p>
    </div>
  );
}

export default App;
