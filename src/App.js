import "./App.css";
import Home from './home.js';
import Guide from './guide.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyMapComponent from "./map.js";


function App() {
  return (
    <>
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </div>
    </Router>

    <MyMapComponent/>
    </>
  );
}

export default App;
