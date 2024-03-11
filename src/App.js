
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// 
import Home1 from './components/Home/Home1';
import Header from './components/Header/Header';
import Rules from './components/Rules/Rules';
import Admin from './components/Administration/Admin';
import Login from './components/Administration/Login';
import SignUp from './components/Administration/SignUp';


function App() {
  return (
 <Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home1/>}/>
    <Route excat path='/about' element={<Rules/>}/>
    <Route excat path='/Account' element={<Admin/>}/>
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/Login" element={<Login />} />
  </Routes>
 </Router>
  );
}

export default App;









// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home1 from './components/Home/Home1';
// import Header from './components/Header/Header';
// import Rules from './components/Rules/Rules';
// import Admin from './components/Administration/Admin';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home1 />} />
//           <Route path='/about' element={<Rules />} />
//           <Route path='/Account' element={<Admin />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
