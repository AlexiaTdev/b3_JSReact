import react, {useState} from 'react';
import './App.css';
import MovieHeader from './components/MovieHeader'

const App = ({title}) => {
  const [color, setColor] = useState("red")
  
  const main_movie = {
    title : "Avengers",
    type : "film"
  }

  const toggleColor = () => {
    if (color ==='red'){
      setColor("blue")
    } else {
      setColor("red")
    }
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <MovieHeader movie={main_movie} color={color}/>
      <button onClick={toggleColor}>Changer la couleur</button>
    </div>
  );
}

export default App;
