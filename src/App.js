import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {

  return (
    <div className="main">
      <Header />
      <Card />
      <Footer />


    </div>
  );
}

export default App;

function Card() {
  return (
    <div>Card Div</div>
  )
}
