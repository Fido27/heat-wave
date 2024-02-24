import './App.css';
import { getCurrLoc } from './backend/location.js'; 
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">

    {/* // 3 main containers for  */}
    <div className="container-Temp"> 
        {/* //heat wave warning header with temperature */}
        <div className="header">
          <span className='warning-message'><h1>Heat Wave Working</h1></span>

          {/*change temperature according to the temperature */}
          <h2 className='temperature'>100 °F</h2>
          <span className='warning'>Heat warning from </span>
        </div>
    </div>

    <div className="container-Info"></div>

    <div className="container-Help">

      <div className="Call help">

        {/*button to call for help */}
        <button className="call-button">
          <FontAwesomeIcon icon={faPhone} />
        </button>
        {/*calling getCurrLoc function in location.js*/}
        <button className="location-button" onClick={getCurrLoc}>Location</button>


      </div>
    
    </div>

  </div>
    
  );
}

export default App;
