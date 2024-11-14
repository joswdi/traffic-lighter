import './App.css';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('red')
  return (
    <div className="App">
      <div className='redColor' style={{ opacity: color === 'red' ? 1 : 0.3}}></div>
      <div className='yellowColor' style={{ opacity: color === 'yellow' ? 1 : 0.3}}></div>
      <div className='greenColor' style={{ opacity: color === 'green' ? 1 : 0.3}}></div>
      <button onClick={() => {
        if (color === 'red') {
          setColor('yellow');
        } else if (color === 'yellow') {
          setColor('green');
        } else setColor('red');
      }}>Change color</button>
    </div>
  );
}

export default App;
