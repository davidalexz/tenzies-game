import React from 'react';
import './App.css';
import Dice from '../components/Dice.jsx';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

function App() {
    const [diceNum, setDiceNum] = React.useState(allNewDice());
    const [tenzies, setTenzies] = React.useState(false);

    React.useEffect(() => {
        const initValue = diceNum[0].value;
        const heldDice = diceNum.every((die) => die.isHeld);
        const everyValue = diceNum.every((die) => die.value === initValue);
        if (heldDice && everyValue) {
            setTenzies(true);
        }
    }, [diceNum]);

    const buttonText = tenzies ? 'New Game' : 'Roll';

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
        if (!tenzies) {
            {
                setDiceNum((prevDice) =>
                    prevDice.map((die) => {
                        return die.isHeld ? die : generateNewDie();
                    })
                );
            }
        } else {
            setTenzies(false);
            setDiceNum(allNewDice);
        }
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
            {tenzies && <Confetti />}
            <h1 className="" title>
                Tenzies
            </h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at its current value
                between rolls
            </p>
            <div className="dice-container">{diceElements}</div>
            <button onClick={rollDice}>{buttonText}</button>
        </main>
    );
}

export default App;
