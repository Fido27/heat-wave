import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      
    {/* // 3 main containers for  */}
    <div className="container-Temp"> 
        {/* //heat wave warning header with temperature */}
        <div className="header">
          <h1>Heat Wave Warning</h1>

          {/*change temperature according to the temperature */}
          <h2 className='temperature'>100 °F</h2>
          <p className='warning'>Heat warning from </p>
        </div>
    </div>

    <div className="container-Info"></div>

    <div className="container-Help">

      <div className="Call help">

        {/*button to call for help */}
        <button className="call-button"><svg xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 32 32" height="32" fill="none" class="svg-icon"><path stroke-width="2" stroke-linecap="round" stroke="#fff" fill-rule="evenodd" d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z" clip-rule="evenodd"></path></svg></button>
        {/*calling getCurrLoc function in location.js*/}
        <button className="location-button"><svg xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 32 32" height="32" fill="none" class="svg-icon"><path stroke-width="2" stroke-linecap="round" stroke="#fff" fill-rule="evenodd" d="m16 2c-6.627 0-12 5.373-12 12 0 6.628 12 18 12 18s12-11.372 12-18c0-6.627-5.373-12-12-12zm0 6c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" clip-rule="evenodd"></path></svg></button>
      </div>
    
    </div>

  </div>
    
  );
}

export default App;
