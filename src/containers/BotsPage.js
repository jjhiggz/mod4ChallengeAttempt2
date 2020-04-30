import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const url = "http://localhost:6001/bots"
class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots:[],
    favorites:[],
  }
  //fetch bots from backend
  componentDidMount(){
    fetch('http://localhost:6001/bots')
      .then(response => response.json())
      .then(data => this.setState({bots:data}))
  }

  //this function will add a favorite to BotsPage State
  addFavorite = (newBot) => {
   return this.state.favorites.find(bot=> bot===newBot)? 
    this.removeFromFavorites(newBot): 
    this.setFavorites(newBot)
  }
  setFavorites = (newBot) => {
    return this.setState({favorites:[...this.state.favorites, newBot]})
  }
  removeFromFavorites = (botToDelete, backEndDelete = false) => {
    let newFavorites = this.state.favorites.filter(bot => bot!==botToDelete) 
    this.setState({favorites:newFavorites})
    if (backEndDelete === true){
    this.deleteFromBackend(botToDelete.id)
  }}


  render() {
    return (
      <div>
          <YourBotArmy favorites={this.state.favorites} addFavorite={this.addFavorite}/>
          <BotCollection bots={this.state.bots} addFavorite={this.addFavorite}/>
      </div>);
  }
}

export default BotsPage;
