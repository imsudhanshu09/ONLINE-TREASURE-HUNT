
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// 
import Home1 from './components/Home/Home1';
import Header from './components/Header/Header';
import Rules from './components/Rules/Rules';

function App() {
  return (
 <Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home1/>}/>
    <Route excat path='/about' element={<Rules/>}/>
  </Routes>
 </Router>
  );
}

export default App;
