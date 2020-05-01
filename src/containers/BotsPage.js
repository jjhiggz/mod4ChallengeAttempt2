import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


const botsURL = "http://localhost:6001/bots"


class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: [],
    favorites: [],
  }
  //fetch bots from backend
  componentDidMount(){
    fetch(botsURL)
      .then( response => 
        response.json()
        )
      .then( data =>  
        this.setState( { bots:data } )
        )
  }
  //Utility Functions
  appendState = ( newTerm, stateKey ) => {
    this.setState(
      {
        [stateKey]: [...this.state[stateKey], newTerm]
      })
  }
  findInState = ( bot, stateKey ) => {
    // console.log('findinState',this.state[stateKey])
    return this.state[stateKey].find(
      stateBot =>
       bot.id === stateBot.id
       )
  }
  removeFromState = ( bot , key ) => {
    const newStateArray = this.state[key].filter( term => {
        return term.id !== bot.id })
        
      return this.setState({
        [key]: newStateArray
      })
  }

  deleteBotFromBackend = ( id ) => {
    fetch( `${botsURL}/${id}` , {
      method: 'DELETE'
    })
    .then(response =>
       console.log(response.status)
       )
  }

  //Essential Functions

  addFavorite = ( newBot ) => {
    if(!this.findInState(newBot,'favorites')){
      this.appendState(newBot, 'favorites')
    }
  }

  removeFavorite = (bot) => {
    this.removeFromState(bot,"favorites")
  }
  
  removeBot = (bot) => {
    this.removeFromState( bot, "favorites")
  }

  deleteBot = ( bot ) => {
    this.removeBot( bot )
    this.removeFavorite( bot )
    this.deleteBotFromBackend( bot.id)
  }

  render() {
    const { bots , favorites } = this.state
    const {deleteBot} = this

    return (
      <div>
          <YourBotArmy
            favorites = { favorites }
            removeFavorite = { this.removeFavorite }
            deleteBot = { deleteBot }
          />
          <BotCollection
            bots={bots}
            addFavorite={this.addFavorite}
            deleteBot = { deleteBot }
          />
      </div>);
  }
}

export default BotsPage;
