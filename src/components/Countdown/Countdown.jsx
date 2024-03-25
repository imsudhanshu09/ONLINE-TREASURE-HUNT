import React, { useEffect, useState } from 'react';
import './Countdown.css';

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "April 6, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='c'>
      <h1>OTH <span>Launching</span> Soon....</h1>
      <div className='l'>
        <div>
          <p>{days < 10 ? "0" + days : days}</p>
          <span>Days</span>
        </div>

        <div>
          <p>{hours < 10 ? "0" + hours : hours}</p>
          <span>Hours</span>
        </div>

        <div>
          <p>{minutes < 10 ? "0" + minutes : minutes}</p>
          <span>Minutes</span>
        </div>

        <div>
          <p>{seconds < 10 ? "0" + seconds : seconds}</p>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;








// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import './Countdown.css';

// const Countdown = () => {
//   const history = useHistory();
//   const [days, setDays] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   const deadline = new Date("April 5, 2024").getTime();

//   const getTime = () => {
//     const now = new Date().getTime();
//     const time = deadline - now;
//     if (time <= 0) {
//     //   clearInterval(interval);
//       history.push('/Questions'); // Navigate to another page
//     } else {
//       setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
//       setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
//       setMinutes(Math.floor((time / (1000 * 60)) % 60));
//       setSeconds(Math.floor((time / 1000) % 60));
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(getTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='c'>
//       <h1>OTH <span>Launching</span> Soon....</h1>
//       <div className='l'>
//         <div>
//           <p>{days < 10 ? "0" + days : days}</p>
//           <span>Days</span>
//         </div>

//         <div>
//           <p>{hours < 10 ? "0" + hours : hours}</p>
//           <span>Hours</span>
//         </div>

//         <div>
//           <p>{minutes < 10 ? "0" + minutes : minutes}</p>
//           <span>Minutes</span>
//         </div>

//         <div>
//           <p>{seconds < 10 ? "0" + seconds : seconds}</p>
//           <span>Seconds</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Countdown;

