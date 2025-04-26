import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  async function handleClick() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
   if (tab && tab.url) {
      const currLink = new URL(tab.url)
      
      if (!/^(www|web)\.facebook\.com$/.test(currLink.hostname)) alert('Please visit your crush facebook profile');
      console.log('tab.url: ', currLink);

      const path = currLink.pathname;

      // Case 1: profile.php?id=...
      if (path === '/profile.php') {
        return currLink.searchParams.has('id');
      }

      // Case 2: custom username (e.g., /zuck or /john.doe)
      // Exclude known non-profile paths
      const nonProfilePaths = [
        'pages', 'groups', 'events', 'watch', 'marketplace', 'notifications', 
        'settings', 'help', 'login', 'logout', 'photo', 'videos'
      ];
      const firstSegment = path.split('/')[1]; // removes leading slash

      //legit facebook profile
      if(firstSegment && !nonProfilePaths.includes(firstSegment.toLowerCase())){
        //do the chat 
      }else{
        alert('Please visit your crush facebook profile')
      }

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
