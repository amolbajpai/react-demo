import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { blog } from './Data/blog';
import savarkar from './images/Veer-Savarkar.jpg'

function App() {
  let name = { "name": "Amol Bajpai" , "add" : "Pune" }

  return (
    <div className="main">
      
      <Header info={name}>Shri Krishnay Namah</Header>
      <img src={savarkar} alt='Veer Savarkar' width="200" height="200"/>
      <div className='row'>
        {blog.map((value,i) => {
          return (<Card pitem = {value} key={i} />)
        })}


      </div>
      <Footer />


    </div>
  );
}

export default App;

function Card({pitem}) {

  return (

    <div className="cardItems" id={pitem.id}>
      <h3>{pitem.title}</h3>
      <p>{pitem.body}</p>
    </div>

  )
}
