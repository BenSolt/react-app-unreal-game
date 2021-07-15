import React, { useState, useEffect } from "react";

function UnrealGame() {

const [unrealgame, setUnrealGame] = useState([]);


function openGame() {
  window.open("https://unrealgamebrowser.s3.us-east-2.amazonaws.com/ARunner-HTML5-Shipping.html");
}


  return (
    <div>
        <h1>UNREAL GAME</h1>
      <button onClick={openGame}>Click to Play Game</button>

    </div>
  );
};
export default UnrealGame



