import React from 'react';

function YourBotArmy({ enlistedBots, onReleaseClick, onDischargeClick }) {
  return (
    <div className='your-bot-army'>
      <h2>Your Bot Army</h2>
      <div className='enlisted-bots'>
        {enlistedBots.map((bot) => (
          <div key={bot.id} className='botCard'>
            <div className='image-container'>
              <img src={bot.avatar_url} alt='bot images' />
            </div>
            <span>
              <p><b>Name: </b>{bot.name}</p>
              <p><b>Health: </b>{bot.health}</p>x 
            </span>
            <span>
              <p><b>Armor: </b>{bot.armor}</p>
              <p><b>Bot-Class: </b>{bot.bot_class}</p>
              <p>{bot.catchphrase}</p>
            </span>
            <button onClick={() => onReleaseClick(bot)}>Release</button>
            <button className="discharge-button" onClick={() => onDischargeClick(bot)}>Discharge (X)</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;

