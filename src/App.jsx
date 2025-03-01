import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    alert('hello')
  }
  
  return (
    <>
        <button onClick={() => handleClick()}>
          Chat to crush {count}
        </button>
    </>
  )
}

export default App
