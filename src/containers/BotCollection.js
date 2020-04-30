import React, { Component } from "react";
import BotCard from '../components/BotCard'


class BotCollection extends Component {
  //your code here
  showBots = (bots) => {
    return bots.map( bot => {
      return <BotCard bot={bot} addFavorite={this.props.addFavorite}/>
    })
  }
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.showBots(this.props.bots)}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
