
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import FullDetails from './Pages/FullDetails/FullDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/fullDetails" element={<FullDetails/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
