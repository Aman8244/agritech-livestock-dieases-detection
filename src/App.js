import './App.css';
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    const uri = process.env.REACT_APP_BACKEND_URI;

    axios.post(`${uri}/predict`, {
      "Animal": 3,
      "Age": 2,
      "Temperature": 103.6,
      "Symptom 1": 11,
      "Symptom 2": 12,
      "Symptom 3": 10
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
