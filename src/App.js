import logo from './logo.svg';
import './App.css';

function App() {
  let names = ["Ram","Krishna","Shyam"]
  return (
    <div className="App">
      <h1>Jai Shri Ram</h1>
      {names.map((v) => {
        return (
          <div><h1>{v}</h1></div>
        )
      })}
    </div>
  );
}

export default App;
