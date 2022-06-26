
import {React, useState} from 'react';
import './Home.css'
import { Card } from 'react-bootstrap';
import Welcome from './Welcome.js'
import TextLoop from "react-text-loop";

function Home() {
  const [welcomeTrigger, setWelcomeTrigger] = useState(true);

  return (
    <div className='background'>
      <Welcome welcomeTrigger = {welcomeTrigger} setWelcomeTrigger = {setWelcomeTrigger}/>
      
    </div>
   
  );
}

export default Home;