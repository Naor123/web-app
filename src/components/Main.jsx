import { useState } from "react";
import Dice from "./Dice";
import Confetti from "react-confetti"

function Main() {
  const [dice, setDice] = useState(()=> initDices());
  const [isExploding, setIsExploding] = useState(true);
  let gameWon = false
  if ((dice.every(die => die.isHeld) )&& (dice.every(die => die.value === dice[0].value) )) 
  {
    gameWon = true
  }
  const DiceElements = dice.map((dice) => (
    <Dice
      key={dice.id}
      changeState={flip}
      num={dice.value}
      state={dice.isHeld}
      id={dice.id}
    />
  ));

  function initDices() {
    const dices = [];
    for (let index = 0; index < 10; index++) {
      // console.log(number)
      dices.push({
        id: index,
        value: Math.floor(Math.random() * 6),
        isHeld: false,
      });
    }
    return dices;
  }

  function rollDice() {
    if(!gameWon){
    setDice((prevdices) =>
      prevdices.map((dice) =>
        dice.isHeld ? dice : { ...dice, value: Math.floor(Math.random() * 6) }
      )
    );
  }else{
    setDice(initDices())
  }
  }
  function flip(id) {
    // console.log(id);
    setDice((prevDices) =>
      prevDices.map((dice) =>
        dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
      )
    );
    // setDice((prev) => ({ ...prev, isHeld: !prev.isHeld }));
  }

  return (
    <main>
      {gameWon && <Confetti />}
      <div className="dice-container">{DiceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "new game": "roll"}
      </button>
    </main>
  );
}

export default Main;

