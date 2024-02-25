import "./App.css";
import Home from './home.js';
import Guide from './guide.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Refugee from "./refugee.js";
import Hospital from "./hospital.js";


function App() {
  return (
    <>
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/refugee" element={<Refugee />} />
          <Route path="/hospital" element={<Hospital />} />
        </Routes>
      </div>
    </Router>

    </>
  );
}

export default App;
