import { useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { CurrentStatus } from './Components/CurrentStatus';
function App() {
 
  return (
    <div className="App">
     <Navbar/>
     <CurrentStatus/>
    </div>
  );
}

export default App;
