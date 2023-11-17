import styled from 'styled-components';

const RollDice = ({currentDice, roleDice}) => {


  return (
    <DiceContainer>
        <div className='dice' onClick={roleDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt='dice' />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
};

export default RollDice;

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 24px;
    }
    .dice{
        cursor: pointer;
    }
`;