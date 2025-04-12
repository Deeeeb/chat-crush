import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  async function handleClick() {
    console.log("count: ", count);
    console.log('path: ', window.location.href)
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log('tab: ', tab);
  if (tab && tab.url) {
    console.log('tab.url: ', tab.url);
    // You can also copy to clipboard if needed:
    // navigator.clipboard.writeText(tab.url);
  }
  }
  
  return (
    <>
        <button onClick={() => handleClick()}>
          get link
        </button>
    </>
  )
}

export default App
