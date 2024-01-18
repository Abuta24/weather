import './App.css'

function App() {

  return (
    <>
      <header>
        <img src="Group 165.svg" alt="" />
        <input
          type="text"
          placeholder="Search Location..."
          maxLength={15}
        />
      </header>
      <div className="mid">
        <h1 className='temp'>16°</h1>
        <div className="rame">
          <h1 className='cityname'>london</h1>
          <h2 className='date'>06:09 - Monday, 9 Sep ‘23</h2>
        </div>
        <img src="outline.svg" alt="" />
      </div>
      <div className="bottom">
        <p className='det'>Weather Details...</p>
        <div className="qvemot">
          <p className='ilia'>thunderstorm with light drizzle</p>
          <div className="giorgi">
            <p className='tempmax'>Temp Max</p>
            <p className='marjvena'>19°</p>
            <img src="Vector.svg" alt="" />
          </div>
          <div className="giorgi">
            <p className='tempmax'>Temp Min</p>
            <p className='marjvena'>15°</p>
            <img src="Vector.svg" alt="" />
          </div>
          <div className="giorgi">
            <p className='tempmax'>Humadity</p>
            <p className='marjvena'>58%</p>
            <img src="Vector.svg" alt="" />
          </div>
          <div className="giorgi">
            <p className='tempmax'>Cloudy</p>
            <p className='marjvena'>86%</p>
            <img src="Vector.svg" alt="" />
          </div>
          <div className="giorgi">
            <p className='tempmax'>Wind</p>
            <p className='marjvena'>5km/h</p>
            <img src="Vector.svg" alt="" />
          </div>
          
        </div>
        <footer>
          <div className="line"></div>
        </footer>
      </div>
      
      
    </>
  )
}

export default App
