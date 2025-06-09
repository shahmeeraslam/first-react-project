import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('black')
  return (
    <div id='BACKGROUND'
      style={{ backgroundColor: color }}
    >
      <div id='btn-area'>
        <button onClick={() => setcolor('red')}>
          red
        </button>
        <button onClick={() => setcolor('blue')}>
          blue
        </button>
        <button onClick={() => setcolor('green')}>
          green
        </button>
        <button onClick={() => setcolor('LightGray')}>
          LightGray
        </button>
        <button onClick={() => setcolor('grey')}>
          grey
        </button>
        <button onClick={() => setcolor('white')}>
          white 
        </button>
        <button onClick={() => setcolor('lightblue')}>
          light blue 
        </button>
      </div>
    </div>

  )
}

export default App
