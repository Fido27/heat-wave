import { getCurrLoc } from './backend/location.js';
import { faPhone, faLocationDot, faStethoscope, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import DateComponent from './date.js';
import WeatherComponent from './weatherData.js';


export default function Home() {
    return (
        <>
            <div className="Home">

                {/*main container */}
                <div className="main-container">


                    {/* // 3 main containers for  */}
                    <div className="container-Temp">
                        {/* //heat wave warning header with temperature */}
                        <div className="header">
                            <span className='warning-message'><h1>Heat Wave Warning</h1></span>

                            {/*change temperature according to the temperature */}
                            <p className='warning'>No Upcoming Heat Waves</p>
                            {/* <p className='warning'>Dangerous heat levels expected! Take precautions to stay cool and hydrated. </p> */}
                            <p className='warning'>Weather conditions are ideal. Enjoy the sunshine and your day.</p>
                            <p className='Date'><DateComponent /></p>
                            <h2 className='temperature'><WeatherComponent /></h2>
                            {/* <h2 className='temperature'> 120 °F</h2> */}
                        </div>
                    </div>


                    <div className="container-Info">
                        <Link to="/guide">
                            <button className='info-button'>
                                <FontAwesomeIcon icon={faCircleInfo} /> <span className="label">Heat Wave Guide</span>
                            </button>
                        </Link>
                    </div>


                    <div className="container-Help">
                        <div className="Call help">
                            <a href="tel:+14807917066" className="call-button">
                                <button>
                                    <FontAwesomeIcon icon={faPhone} /> <span>Call for Help</span>
                                </button>
                            </a>
                        </div>
                    </div>



                    <div className="Location help">
                        <Link to={"/refugee"}>
                            {/*calling getCurrLoc function in location.js*/}
                            <button className="location-button" onClick={getCurrLoc}><FontAwesomeIcon icon={faLocationDot} /> <span> Refugee Centers</span></button>
                        </Link>
                    </div>

                    <div className="Hospital help">

                        <Link to={"/hospital"}>
                            {/*button for hospital */}
                            <button className="hospital-button"><FontAwesomeIcon icon={faStethoscope} /> <span>Nearest Hospital</span></button>
                        </Link>

                    </div>

                </div>

            </div>
        </>
    );
}