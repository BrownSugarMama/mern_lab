import React, {Component} from 'react'
import axios from 'axios'

class MyPlayer extends (Component) {
    state = {
        players :[]
    }


  componentDidMount () {
    axios
      .get('http://localhost:3050/myplayers')
      .then(response => this.setState({ players: response.data.myplayers }))
      .catch(err => console.log(err))
  }

    render () {
        let players = this.state.players.map((player, index) => {
        return (
            <li key={index} className = 'list'>
            <a href ="`/player/${player.position}`">
            {player.position}
            </a>
            </li>)
        })
        return (
        <div>
        {players}
        </div>
        )
    }
}

export default MyPlayer


