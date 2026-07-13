import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Prompt } from './pages/Prompt'
import { Models } from './pages/Models'
import { Compare } from './pages/Compare'
import { Simulate } from './pages/Simulate'
import { Nav } from './components/Nav'

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-4xl mx-auto px-3 py-4">
        <Nav />
        <Routes>
          <Route path="/" element={<Prompt />} />
          <Route path="/models" element={<Models />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/simulate" element={<Simulate />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
