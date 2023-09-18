import React, { useEffect, useState } from "react";
import "./App.css";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [classFilters, setClassFilters] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  function handleRecruitClick(bot) {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  }

  function handleReleaseClick(bot) {
    const updatedEnlistedBots = enlistedBots.filter(
      (enlistedBot) => enlistedBot.id !== bot.id
    );
    setEnlistedBots(updatedEnlistedBots);
  }

  function handleDischargeClick(bot) {
    // Implement the logic to delete the bot from the backend permanently
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        const updatedEnlistedBots = enlistedBots.filter(
          (enlistedBot) => enlistedBot.id !== bot.id
        );
        setEnlistedBots(updatedEnlistedBots);
      })
      .catch((error) => {
        console.error('Error discharging bot:', error);
      });
  }
  function handleFilterClick(botClass) {
    if (classFilters.includes(botClass)) {
      setClassFilters(classFilters.filter((filter) => filter !== botClass));
    } else {
      setClassFilters([...classFilters, botClass]);
    }
  }
  function handleSortClick(criteria) {
    setSortCriteria(criteria);
  }

  const filteredBots = bots.filter((bot) =>
    classFilters.length === 0 ? true : classFilters.includes(bot.bot_class)
  );

  if (sortCriteria) {
    filteredBots.sort((a, b) => a[sortCriteria] - b[sortCriteria]);
  }

  return (
    <div>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} onBackClick={() => setSelectedBot(null)} />
      ) : (
        <div>
          <SortBar onSortClick={handleSortClick} />
          <div className="class-filter">
            {[
              "Support",
              "Medic",
              "Assault",
              "Defender",
              "Captain",
              "Witch",
            ].map((botClass) => (
              <button
                key={botClass}
                className={classFilters.includes(botClass) ? "active" : ""}
                onClick={() => handleFilterClick(botClass)}
              >
                {botClass}
              </button>
            ))}
          </div>
          {filteredBots.map((bot) => (
            <div key={bot.id} className="botCard">
              {/* Display bot details here */}
              <div className="image-container">
                 <img src={bot.avatar_url} alt="bot images" />
                 <hr />
                {" "}
              </div>
              {" "}
              <span>
                {" "}
                <p>
                  <b>Name: </b>
                  {bot.name}
                </p>
                {" "}
                <p>
                  <b>Health: </b>
                  {bot.health}
                </p>
                {" "}
              </span>
              {" "}
              <span>
                {" "}
                <p>
                  <b>Armor: </b>
                  {bot.armor}
                </p>
                {" "}
                <p>
                  <b>Bot-Class: </b>
                  {bot.bot_class}
                </p>
                 <p>{bot.catchphrase}</p>
                 <p>{bot.created_at}</p>
                 <p>{bot.updated_at}</p>
                {" "}
              </span>
              <button onClick={() => handleRecruitClick(bot)}>
                Recruit Army
              </button>
            </div>
          ))}
          <YourBotArmy enlistedBots={enlistedBots} onReleaseClick={handleReleaseClick} onDischargeClick={handleDischargeClick}/>
        </div>
      )}
    </div>
  );
}

export default BotCollection;
