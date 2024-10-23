import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.fruits);
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      {array.map((fruits, index) => (
        <div>
          <p className="text-sky-300">{fruits}</p>
          <p className="text-3xl">hello</p>
          <button className="btn">yoo</button>
        </div>
      ))}

      <div></div>
    </>
  );
}

export default App;
