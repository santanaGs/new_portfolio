import './App.css'
import { MotionConfig } from 'motion/react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Main from './sections/Main'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </MotionConfig>
  )
}

export default App
