import React from 'react'
import './App.css'
import SpotCheck1 from './spot-checks/SpotCheck1'
import SpotCheck2 from './spot-checks/SpotCheck2'
import SpotCheck3 from './spot-checks/SpotCheck3'
import Exercise1 from './exercises/Exercise1'
import Exercise2 from './exercises/Exercise2'
import Exercise3 from './exercises/Exercise3'

function App() {

  return (
    <div className="app">
      <SpotCheck1 />
      <SpotCheck2 />
      <SpotCheck3 />
      <Exercise1 />
      <Exercise2 />
      <Exercise3 />
    </div>
  )
}

export default App