import React from 'react';
import { Link } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyMapComponent from './map.js';

export default function Hospital() {
    return (
        <>
            <div className="map-content">
                <div className="child-map-content">
                    <div className="back-button-container">
                        <Link to="/">
                            <button className='back-button'>
                                <FontAwesomeIcon icon={faArrowLeft} />  <span className="back">Back</span>
                            </button>
                        </Link>
                    </div>
                    <div className="map-container">
                        <div className='map'>
                            <MyMapComponent />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}