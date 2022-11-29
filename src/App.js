import './App.css';
import BasicRouting from './BasicRouting/BasicRouting';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return <BasicRouting counter={counter} setCounter={setCounter} />;
}

export default App;
