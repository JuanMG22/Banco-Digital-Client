import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main'

function App () {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
    </BrowserRouter>
  )
}

export default App
