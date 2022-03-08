import './App.css';
import Button from './components/Button/Button'
import {useState, useEffect} from 'react'
import Timmer from './components/Timmer/Timmer';

function App() {

  const [time, setTime] = useState(0);
  const [interval, intervalSet] = useState(null);

  const start = () => {
    intervalSet( setInterval(() => {
      setTime(prevValue => prevValue + 10);
    }, 10))
  };

  const handleReset = () => {
    setTime(0)
    intervalSet(null);
  }

  const handleStop = () => {
    clearInterval(interval);
    intervalSet(null);
  }

  useEffect(() => {
    return () => {
       if(interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <Timmer minis={time}/>
      <Button name = "Start" onClick = {start}/>
      <Button name = "Stop" onClick = {handleStop}/>
      <Button name = "Reset" onClick ={handleReset} />
    </div>
  );
}

export default App;
