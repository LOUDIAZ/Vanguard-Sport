import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar/>
      </div>
      <div>
        <h1>Bienvenidos</h1>
      </div>
      
    </>
  )
}

export default App
