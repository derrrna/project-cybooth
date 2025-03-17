import { useState } from 'react'
import './App.css'
import Photobooth from './Pages/Photobooth.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Photobooth/>
    </>
  )
}

export default App
