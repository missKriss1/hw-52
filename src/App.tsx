
import './App.css'
import Cards from "./components/Card/Cards.tsx";
import CardDeck from "./lib /CardDeck.ts";
import {useState} from "react";
import Card from "./lib /Card.ts";
import PokerHand from "./lib /PokerHand.ts";

const NewCardDeck = new CardDeck();

const App = () => {
    const [hand, setHand] = useState<Card[]>([]);
    const [combination, setCombination] = useState('');

    const getCardToHand = () => {
        const getFiveCards = NewCardDeck.getCards(5)
        setHand(getFiveCards);
        let pockerHand = new PokerHand(getFiveCards);
        setCombination(pockerHand.getOutcome());
    };

  return (
      <>
          <p>Card count: {NewCardDeck.deck.length}</p>
          {NewCardDeck.deck.length >= 5 ? <button onClick={getCardToHand}>Раздать карты</button>
                : <p>Карты закончились</p>
          }

          {combination}
          {hand.length > 0 && NewCardDeck.deck.length >=5  ?
              <div className="playingCards faceImages">
                  {hand.map((c, index) => {
                      return (
                          <Cards key={index} suit={c.suit} rank={c.rank}/>
                      )
                  })}
              </div>
              : null
          }
      </>
  )
};

export default App
