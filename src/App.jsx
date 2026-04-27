import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer, Header } from './components'
import { AboutPage, ContactPage, HomePage, ProjectsPage, ResumePage } from './pages'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-accent-radial text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/cv" element={<ResumePage />} />
            <Route path="/realisations" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
