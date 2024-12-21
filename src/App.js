import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  let name = { "name": "Amol Bajpai" }

  return (
    <div className="main">
      
      <Header info={name} />
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
