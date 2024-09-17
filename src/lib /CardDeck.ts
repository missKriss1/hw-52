import Card from "./Card.ts";

class CardDeck{

    public deck: Card[];
    constructor() {
        this.deck = [];
        const suits =['diams',  'hearts', 'clubs' ,'spades'];
        const ranks = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        for(const suit of suits){
            for(const rank of ranks){
                this.deck.push(new Card(suit, rank))
            }
        }
        //console.log(this.deck);
    }

    getCard(): Card | null  {
       let randomCard: Card | null = null;

       let randomIndex = Math.floor(Math.random() * this.deck.length);
        randomCard = this.deck[randomIndex];
        this.deck.splice(randomIndex, 1);
        return randomCard;

    }

    getCards(howMany: number): Card[] | []  {
        const cards : Card[] = [];

        for (let i = 0; i < howMany; i++) {
            const getCardPush = this.getCard();
            //console.log(getCardPush);
            //console.log(this.deck)

            if(getCardPush !== null){
                cards.push(getCardPush);
            }
        }
        return cards;
    }
}
export default CardDeck;

