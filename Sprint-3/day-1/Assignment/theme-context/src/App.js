import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const {handleTheme,isLight}=useContext(ThemeContext); 
  return (
    <div className= {`App ${isLight ? "light": "black"}`}>
      <button style={{fontSize:"30px"}} onClick={handleTheme}>Toggle</button>
    </div>
  );
}

export default App;
