import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Main from './sections/Main'

function App() {
  return (
    <>
      <div>
        <Header/>
        <Main/>
      </div>
    </>
  )
}

export default App
