import React from 'react';
import Button from 'react-bootstrap/Button';
import Counter from './componets/Counter';
import './App.css'

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Button variant="info" className='btn btn-info'>Primary</Button>
      <Counter />
    </>
  );
}

export default App;
