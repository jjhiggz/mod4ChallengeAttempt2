import React from "react";
import BotCard from '../components/BotCard'

function YourBotArmy({ favorites , removeFavorite , deleteBot }){

  //your bot army code here...
  const showBots = ( bots ) => {
    return bots.map( bot => {
      return <BotCard
        bot={ bot }
        handleClick = { removeFavorite }
        deleteBot = { deleteBot }
      />
    })
  }
    return (
      <div className = "ui segment inverted olive bot-army" >
        <div className = "ui five column grid" >
          <div className = "row bot-army-row" >
            Your Bot Army
            { showBots(favorites) }
          </div>
        </div>
      </div>
    );
}

export default YourBotArmy;
