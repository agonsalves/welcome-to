import { useEffect, useState } from "react";
import { ADDRESSES, EFFECTS, PLANS, PLANS_DEFAULT } from "./App.config";
import { deckFill, getCardIndex, shuffle } from "./utils";
import { ButtonContainer, Cards, CityPlans, Game, GameHeader, NextTurnButton, TurnCounter } from "./styles";
import CityPlan from "./CityPlan";
import CardPair from "./CardPair";

function App() {
  const [gameDeck, setGameDeck] = useState([])
  const [currentTurn, setCurrentTurn] = useState(1)
  const [cityPlans, setCityPlans] = useState([])
  const [takenPlans, setTakenPlans] = useState(PLANS_DEFAULT)

  const chooseCityPlans = () => {
    const plans = [1, 2, 3].map((index) => shuffle(PLANS[index])[0])
    setCityPlans(plans)
  }

  const shuffleGameDeck = () => {
    const addressList = shuffle(ADDRESSES.reduce(deckFill, []))

    const effectList = shuffle(EFFECTS.reduce(deckFill, []))

    const finalDeck = addressList.map((value, index) => ({
      address: value,
      effect: effectList[index]
    }))

    setGameDeck(finalDeck)

    console.log('shuffled')
  }

  const handleTakeCityPlan = (level) => {
    setTakenPlans(plans => ({...plans, [level]: !plans[level]}))
  }

  const handleNextTurn = () => {
    if (currentTurn % 27 === 0) {
      shuffleGameDeck()
    }

    setCurrentTurn(current => current + 1)
  }

  const handleNewGame = () => {
    setCurrentTurn(1)
    shuffleGameDeck()
    chooseCityPlans()
    setTakenPlans(PLANS_DEFAULT)
  }

  useEffect(() => {
    handleNewGame()
  }, [])

  return (
      <Game>
        <GameHeader>
          <TurnCounter>TURN<br/>{currentTurn}</TurnCounter>
          <CityPlans>
            {cityPlans.length && [1,2,3].map((level, i) => (
                <CityPlan
                    plan={cityPlans[level - 1]}
                    level={level}
                    isTaken={takenPlans[level]}
                    handleTaken={handleTakeCityPlan}
                    key={level}
                />
            ))}
          </CityPlans>
        </GameHeader>
        <Cards>
          {gameDeck.length && [0,1,2].map((num) => (
              <CardPair
                  address={gameDeck[getCardIndex(currentTurn, num)].address}
                  effect={gameDeck[getCardIndex(currentTurn, num)].effect}
                  key={num}
              />
          ))}
        </Cards>
        <ButtonContainer>
          <NextTurnButton onClick={() => handleNextTurn()}>Next Turn</NextTurnButton>
          <button
              onClick={() => handleNewGame()}
              style={{marginLeft: 50}}
          >
            New Game
          </button>
        </ButtonContainer>
      </Game>
  );
}

export default App;
