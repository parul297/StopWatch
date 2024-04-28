// import { useState } from "react";
 

// const handleWatch =() =>{
//     const [curTime, setCurTime] = useState(0);
//   const [toggle, setToggle] = useState("Start");
//   const [reset, setReset] = useState(false);

//   const [intervalId, setIntervalId] = useState(null);
//   toggle === "Start" ? setToggle("Stop") : setToggle("Start");
//   if (!intervalId) {
//     const timer = setInterval(() => {
//       setCurTime((prev) => prev + 1);
//     }, 1000);
//     setIntervalId(timer);
//   } else {
//     clearInterval(intervalId);
//     setIntervalId(null);
//   }
// };

// const handleReset = (id) => {
//   setCurTime(0);
//   if (id) {
//     clearInterval(id);
//     setIntervalId(null);
//   }
// };

// const formatted = () => {
//   let minutes = Math.floor(Number(curTime) / 60);
//   let seconds = Number(curTime) % 60;
//   if (String(seconds).length < 2) seconds = "0" + String(seconds);

//   return `${minutes}:${seconds}`; 
//   return (
//     <div className="App">
//       <h1>Stopwatch</h1>
//       <div className="time">Time: {formatted()}</div>
//       <div>
//         <button type="button" onClick={() => handleWatch(intervalId)}>
//           {toggle}
//         </button>
//         <button type="button" onClick={() => handleReset(intervalId)}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );

// };


 
// export default handleWatch ;
import React, { useState } from "react";

const Stopwatch= () => {
  const [curTime, setCurTime] = useState(0);
  const [toggle, setToggle] = useState("Start");
  const [intervalId, setIntervalId] = useState(null);

  const handleWatch = () => {
    if (toggle === "Start") {
      setToggle("Stop");
      const timer = setInterval(() => {
        setCurTime((prev) => prev + 1);
      }, 1000);
      setIntervalId(timer);
    } else {
      setToggle("Start");
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const handleReset = () => {
    setCurTime(0);
    clearInterval(intervalId);
    setIntervalId(null);
    setToggle("Start");
  };

  const formatted = () => {
    let minutes = Math.floor(Number(curTime) / 60);
    let seconds = Number(curTime) % 60;
    if (String(seconds).length < 2) seconds = "0" + String(seconds);

    return `${minutes}:${seconds}`;
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className="time">Time: {formatted()}</div>
      <div>
        <button type="button" onClick={handleWatch}>
          {toggle}
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
