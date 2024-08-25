import './App.scss'
import Countdown from './Components/Countdown/Countdown'
import Header from './Components/Header/Header'
// import { Particle } from './Components/Particle/Particle'

function App() {
  return (
    <>
    {/* <Particle/> */}
      <div>
          <Header/>
          <Countdown/>
      </div>
    </>
  )
}

export default App
