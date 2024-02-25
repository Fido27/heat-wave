import './App.css';
import { getCurrLoc } from './backend/location.js'; 
import { faPhone, faLocationDot, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyMapComponent from './map.js';

function App() {
  return (
    <div className="App">

    {/*main container */}
    <div className="main-container">

      {/* // 3 main containers for  */}
      <div className="container-Temp"> 
          {/* //heat wave warning header with temperature */}
          <div className="header">
            <span className='warning-message'><h1>Heat Wave Warning</h1></span>

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

        </div>

        <div className="Location help">

          {/*calling getCurrLoc function in location.js*/}
          <button className="location-button" onClick={getCurrLoc}><FontAwesomeIcon icon={faLocationDot} /></button>

        </div>

        <div className="Hospital help">
          {/*button for hospital */}
          <button className="hospital-button"><FontAwesomeIcon icon={faStethoscope} /></button>


        </div>
      
      </div>

    </div>

  </div>
    
  );
}

export default App;
