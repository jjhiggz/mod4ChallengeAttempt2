import React from "react";
import BotCard from '../components/BotCard'


function BotCollection ( { bots , addFavorite , deleteBot } ){
  //your code here
 const showBots = ( bots ) => {
    return bots.map( bot => {
      return <BotCard 
        bot={bot}
        handleClick={ addFavorite }
        deleteBot = { deleteBot }
        />
    })
  }
    return (
      <div className="ui four column grid">
        <div className="row">
          {showBots(bots)}
          Collection of all bots
        </div>
      </div>
    );
}

export default BotCollection;
