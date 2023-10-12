import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftContent from './components/LeftContent'
import CentralContent from './components/CentralContent'
import RightContent from './components/RightContent'

function App() {

  return (
    <main>
      <LeftContent/>
      <CentralContent/>
      <RightContent/>
    </main>
  )
}

export default App
