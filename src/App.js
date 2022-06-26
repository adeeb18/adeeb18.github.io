import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import {Routes} from './Routes'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes/> 
    </div>
  );
}

export default App;
