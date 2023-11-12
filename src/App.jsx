import React from 'react';
import './App.css';
import Dice from '../components/Dice.jsx';
import { nanoid } from 'nanoid';

function App() {
    const [diceNum, setDiceNum] = React.useState(allNewDice());

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        };
    }

    function allNewDice() {
        let nums = [];
        for (let i = 0; i < 10; i++) {
            nums.push(generateNewDie());
        }
        return nums;
    }

    function rollDice() {
        setDiceNum((prevDice) =>
            prevDice.map((die) => {
                return die.isHeld ? die : generateNewDie();
            })
        );
    }

    function holdDice(id) {
        setDiceNum((prevDice) =>
            prevDice.map((die) => {
                return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
            })
        );
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
