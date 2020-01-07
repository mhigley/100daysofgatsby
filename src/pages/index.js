import React from "react"
import "../styles/styles.css"
import Loader from "../components/loader"
import Rocket from "../components/rocket"
// import { ReactComponent as Logo } from "../imgs/logo.svg"

export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <Loader />
        <Rocket />
        React + GSAP Animation
      </header>
    </div>
  )
}
