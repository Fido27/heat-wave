// {/*guide page when heat wave guide is pressed*/}
// export default function Guide() {

//     window.location.href = '/guide'; // Assuming '/guide' is the route to your guide page
  
//   return (
//     <div className="App">
//       <div className="main-container">
//         <div className="container-Temp">
//           <div className="header">
//             <span className='warning-message'><h1>Heat Wave Warning</h1></span>
//             <p className='warning'>Dangerous heat levels expected! Take precautions to stay cool and hydrated. </p>
//             <h2 className='temperature'>110 °F</h2>
//           </div>
//         </div>
//         <div className="container-Info">
//           <button className='info-button'>
//             <FontAwesomeIcon icon={faCircleInfo} /> <span className="label">Heat Wave Guide</span>
//           </button>
//         </div>
//         <div className="container-Help">
//           <div className="Call help">
//             <button className="call-button">
//               <FontAwesomeIcon icon={faPhone} /> <span>Call for Help</span>
//             </button>
//           </div>
//         </div>
//         <div className="Location help">
//           <button className="location-button" onClick={getCurrLoc}><FontAwesomeIcon icon={faLocationDot} /> <span> Refugee Centers</span></button>
//         </div>
//         <div className="Hospital help">
//           <button className="hospital-button"><FontAwesomeIcon icon={faStethoscope} /> <span>Nearest Hospital</span></button>
//         </div>
//       </div>
//     </div>
//   );
// }