import React from 'react'
import heroImageSrc from './assets/hero.jpg'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="ds-hero-container" style={{
        backgroundImage: `url(${heroImageSrc})`
      }}>
        <div className="ds-hero-body">
          <h1>Derek Surguy</h1>
          <div className="ds-hero-divider"></div>
          <h2>Front-End Software Engineer</h2>
        </div>
      </div>
      <div className="main-container">
        <div className="main-body">
          <nav className="nav">
            <a href="/" className="button is-ghost">Home</a>
          </nav>
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}

export default App
