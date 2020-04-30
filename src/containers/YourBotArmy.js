import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  //your bot army code here...
  showBots = (bots) => {
    return bots.map( bot => {
      return <BotCard bot={bot} addFavorite={this.props.addFavorite}/>
    })
  }
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.showBots(this.props.favorites)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
