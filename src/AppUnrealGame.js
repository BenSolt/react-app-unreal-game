import React, { useState, useEffect } from "react";
import './AppUnrealGame.css';

import Image1 from "../src/images/BlakeQuest_Image1.png"
import Image2 from "../src/images/BlakeQuest_Image2.png"
import Image3 from "../src/images/BlakeQuest_Image3.png"
import Image4 from "../src/images/BlakeQuest_Image4.png"
import Title from "../src/images/BlakesQuestBigCoverArt.png"

function UnrealGame() {

  function openGame() {

    window.open("https://blakesquestgame.s3.us-east-2.amazonaws.com/BlakesAdventure.html");
  }

  const Click1 = () => {
    console.log('click')
    document.getElementById("img01").src = Image1;
    document.getElementById("myModal").style.display = 'block'
  }

  const Click2 = () => {
    document.getElementById("img01").src = Image2;
    document.getElementById("myModal").style.display = 'block'
  }

  const Click3 = () => {
    document.getElementById("img01").src = Image3;
    document.getElementById("myModal").style.display = 'block'
  }

  const Click4 = () => {
    document.getElementById("img01").src = Image4;
    document.getElementById("myModal").style.display = 'block'
  }

  window.onclick = function (e) {
    if (e.target === document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  }

  const ClickClose = () => {
    document.getElementById("myModal").style.display = "none";
  }

  return (
    <div className='unrealGamePage'>
      <div className="title">
        <img className="imageGameTitle" src={Title} alt="game title" />
        <div className="titleText">
          <h1>Blake's Quest</h1>
        </div>
      </div>

      <div className='sectionTop'>

        <div className='sectionTopA'>
          <h4> Created using Unreal Engine via Blueprints, Adobe Flash: for artwork, AWS: to host server</h4>
          <h4>Click <button className="btnGame" onClick={openGame}>Load Game</button> to play</h4>
          <h5>Side scroller game where you earn new abilities as you progress through the game, which enables you to explore new
            locations. Learn abilities like double jump, wall climb, and even a jetpack</h5>
        </div>

        <div className='sectionTopB'>
          <iframe className='videoSize'
            title="Blakes Quest"
            src="https://www.youtube.com/embed/fhSUHRPf9aA"
            frameborder="0" allow="accelerometer; autoplay; 
                    encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>

      <div id="myModal" className="modal">
        <div class="modal-content">
          <img id='img01' className='myImgsModal' onClick={ClickClose} alt='current image' />
        </div>
      </div>



      <div className='sectionImages'>
        <img className="imageGame" onClick={Click1} src={Image1} alt="blake in start room" />
        <img className="imageGame" onClick={Click2} src={Image2} alt="Blake with jetpack" />
        <img className="imageGame" onClick={Click3} src={Image3} alt="Blake in science lab" />
        <img className="imageGame" onClick={Click4} src={Image4} alt="Blake at store" />
      </div>

    </div>
  );
};
export default UnrealGame



