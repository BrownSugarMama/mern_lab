import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Header'
import MyPlayer from './MyPlayer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header>
          <h1 className='Header' />
        </Header>
        <MyPlayer />
        <p> Help us build the ultimate MyPlayer Database! </p>
      </div>
    )
  }
}

export default App
