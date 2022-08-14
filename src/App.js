import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('dewangga');

  useEffect(() => {
    const judul = document.getElementById('judul');
    setTimeout(() => {
      judul.textContent = 'haloo';
    },2000)
  }, []);

  return (
    <div className="App">
      <h1 id="judul">{name}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <h2>{ count }</h2>
      <button onClick={() => setCount(count + 1)}>+</button>

      <button onClick={() => name === 'dewangga' ? setName('mahfuz') : setName('dewangga')}>set name</button>
    </div>
  );
}

export default App;
