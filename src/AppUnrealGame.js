import React, { useState, useEffect } from "react";
import './AppUnrealGame.css';



function UnrealGame() {

  const [unrealgame, setUnrealGame] = useState([]);


  function openGame() {

    window.open("https://blakesquestgame.s3.us-east-2.amazonaws.com/BlakesAdventure.html");
  }


  return (
    <div className='unrealGamePage'>
      <div className="title">
        <h1>Blake's Quest - Unreal Engine Game</h1>
      </div>

      <div className='sectionTop'>
        <div>
          <img className="imageGameTitle" src="BlakesQuestBigCoverArt.png" alt="screen shot of game" />
        
        </div>

        <div>
          <h3> Created Via Blueprints, Adobe Flash: for artwork, AWS: to host server</h3>
          <h3>Click <button className="btnGame" onClick={openGame}>Load Game</button> to play</h3>
          <h4>Side scroller game where you obtain new abilities as you progress through the game, that enable you to explore new
            locations. like double jump, wall climb, and even a jetpack</h4>
        </div>

      </div>

      <div className='imageHolder'>
        <img className="imageGame" src="BlakeQuest_Image1.png" alt="screen shot of game" />
        <img className="imageGame" src="BlakeQuest_Image2.png" alt="screen shot of game" />
        <img className="imageGame" src="BlakeQuest_Image3.png" alt="screen shot of game" />
        <img className="imageGame" src="BlakeQuest_Image4.png" alt="screen shot of game" />
      </div>

    </div>
  );
};
export default UnrealGame



