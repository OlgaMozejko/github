import "./style/colors.css"
import './App.css'

import Header from "./components/Header/Header"
import Intro from "./components/Intro/Intro"

import { useRef, useState } from "react"

function App() {

  const dragRef = useRef(null)

  return (
    <section className="App">
      <div className="App-wrapper" ref={dragRef}>
      <Header />
      <Intro dragRef={dragRef}/>
      </div>
    </section>
  )
}

export default App
