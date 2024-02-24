import './App.css';
import {getCurrLoc} from './backend/location.js'; 

function App() {
  return (
    <div className="App">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      
    {/* // 3 main containers for  */}
    <div className="container-Temp"> 
        {/* //heat wave warning header with temperature */}
        <div className="header">
          <span h1>Heat Wave Warning</span>

          {/*change temperature according to the temperature */}
          <h2 className='temperature'>100 °F</h2>
          <span className='warning'>Heat warning from </span>
        </div>
    </div>

    <div className="container-Info"></div>

    <div className="container-Help">

      <div className="Call help">

        {/*button to call for help */}
        <button className="call-button">Call</button>
        {/*calling getCurrLoc function in location.js*/}
        <button className="location-button" onClick={getCurrLoc}>Location</button>


      </div>
    
    </div>

  </div>
    
  );
}

export default App;
