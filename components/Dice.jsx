import dice1 from '../src/assets/dice-faces/dice-one-solid.svg';
import dice2 from '../src/assets/dice-faces/dice-two-solid.svg';
import dice3 from '../src/assets/dice-faces/dice-three-solid.svg';
import dice4 from '../src/assets/dice-faces/dice-four-solid.svg';
import dice5 from '../src/assets/dice-faces/dice-five-solid.svg';
import dice6 from '../src/assets/dice-faces/dice-six-solid.svg';

function Dice(props) {
    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white',
    };

    let diceImage;
    switch (props.value) {
        case 1:
            diceImage = dice1;
            break;
        case 2:
            diceImage = dice2;
            break;
        case 3:
            diceImage = dice3;
            break;
        case 4:
            diceImage = dice4;
            break;
        case 5:
            diceImage = dice5;
            break;
        case 6:
            diceImage = dice6;
            break;
        default:
            diceImage = null;
            break;
    }

    const diceStyle = {
        backgroundImage: `url(${diceImage})`,
        width: '39px',
        height: '45px',
    };
    return (
        <div onClick={props.holdDice} className="dice-face" style={styles}>
            <h2 className="dice-num" style={diceStyle}></h2>
        </div>
    );
}

export default Dice;
