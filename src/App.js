
import './App.css';
import Contador from './components/Contandor';
import DibujoComplejo from './components/DibujoComplejo';
import DibujoComplejoArray from './components/DibujoComplejoArray';
import PadreDeportes from './components/PadreDeportes';
import PadreNumero from './components/PadreNumero';
import PadreComic from './components/PadreComic';

function App() {
  return (
    <div className="App">
      {/* <Contador Inicio="1" />
      <DibujoComplejo/>
      <DibujoComplejoArray/> 
      <PadreDeportes/>
      <PadreNumero/>*/}

      <PadreComic/>
      
      
    </div>
  );
}

export default App;
