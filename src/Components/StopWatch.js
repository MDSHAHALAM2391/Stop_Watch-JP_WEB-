import React, { useState, useEffect} from "react";
import '../Components/StopWatch.css'

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [Stop, setStop] = useState(false);
    const [running , setRunning] = useState(false);


    const isStart  = () => {
      setRunning(true);
      if(Stop === true){
        setTime(0)
        setRunning(true)
      }

    }
    const isPause = () =>{
        setRunning(false);
    }
    const isContinue = () =>{
      if(Stop === false){
        setRunning(true)
      }
      else 
      {
        setTime(0)
        setStop(false);
      }
    }
    const isStop = () =>{
      setRunning(false);
      setStop(true);
    }
    const isReset = () =>{
      setTime(0)
      setRunning(false)
    }


    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 500);
        }, 500);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);

    return (
       <div className="parent-div">
         
       <div className="input-box">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>

        <div className="buttons">
          <button onClick={() => isStart()}>Start</button>
          <button onClick={() => isPause()}>Pause</button>
          <button onClick={() => isContinue()}>Continue</button>
          <br />
          <button onClick={() => isStop()}>Stop</button>
          <button onClick={() => isReset()}>Reset</button>  
        </div>
        </div>
    );
  };

export default StopWatch;