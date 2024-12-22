import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  let name = { "name": "Amol Bajpai" , "add" : "Pune" }

  return (
    <div className="main">
      
      <Header info={name}>Shri Krishnay Namah</Header>
      <div className='row'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />


    </div>
  );
}

export default App;

function Card() {
  return (
    <div className="cardItems">Card Div</div>
  )
}
