import React from 'react';
import './App.css';
import Dice from '../components/Dice.jsx';
import { nanoid } from 'nanoid';

function App() {
    const [diceNum, setDiceNum] = React.useState(allNewDice());

    function allNewDice() {
        let nums = [];
        for (let i = 0; i < 10; i++) {
            nums.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid(),
            });
        }
        return nums;
    }

    function rollDice() {
        setDiceNum(allNewDice());
    }

    function holdDice(id) {
        console.log(id);
    }

    const diceElements = diceNum.map((die) => (
        <Dice
            value={die.value}
            key={die.id}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ));

    return (
        <main>
            <div className="dice-container">{diceElements}</div>
            <button onClick={rollDice}>Roll</button>
        </main>
    );
}

export default App;
