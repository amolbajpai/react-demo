import logo from './logo.svg';
import './App.css';

function App() {
  let names = ["Ram", "Krishna", "Shyam"]
  let obj = {
    "name": "Amol",
    "address" : "Noida"
  }
  return (
    <div className="main">
      <h1>Jai Shri Ram</h1>
      {names.map((v) => {
        return (
          <div><h1>{v}</h1></div>
        )
      })}
      <h2>{obj.name}</h2>
    </div>
  );
}

export default App;
