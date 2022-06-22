import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Details from './components/Details'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </Router>
  )
}

export default App
