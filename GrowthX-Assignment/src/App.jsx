import './App.css'

function App() {

  return (
    <>
      <div className='main-wrapper'>
        <div className='container'>
          <svg viewBox="0 0 200 300">
            <path 
              className="sparkle" 
              d="M100 50 Q100 100 150 100 Q100 100 100 150 Q100 100 50 100 Q100 100 100 50 Z"
              fill="white"
            />
            <path 
              className="outlined-triangle" 
              d="M100 170 Q100 170 200 170 L200 170 Q100 170 100 270 L100 270 Q100 170 0 170 L0 170 Q100 170 100 170 Z"
              fill="transparent"
            />
            <path 
              className="filled-triangle" 
              d="M100 170 Q100 170 200 170 L200 170 Q100 170 100 270 L100 270 Q100 170 0 170 L0 170 Q100 170 100 170 Z"
              fill='white'
            />
          </svg>
        </div>
        <div className='text'>ELEVATE</div>
      </div>
    </>
  )
}

export default App
