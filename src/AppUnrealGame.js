import React, { useState, useEffect } from "react";

function UnrealGame() {

const [unrealgame, setUnrealGame] = useState([]);


function openGame() {
  window.open("https://unrealgamebrowser.s3.us-east-2.amazonaws.com/ARunner-HTML5-Shipping.html");
}


  return (
    <div>
        <h1>UNREAL Engine Game</h1>
        <h2>A simple game created using the Unreal Engine via Blueprints</h2>
        <h3>Programs used: Unreal Engine, Adobe Flash - artwork, AWS to host server</h3>
        <h3>Add some screenshots</h3>
        <img alt="screen shot of game"/>

      Click to <button onClick={openGame}>Load Game</button> and play

    </div>
  );
};
export default UnrealGame



