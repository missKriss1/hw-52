import Card from "./Card.ts";

class PokerHand {
    constructor(public hand: Card[]) {
        this.hand = hand;
    }

    getOutcome(){
        const suit: {[key: string]: number} = {
            diams: 0,
            hearts: 0,
            clubs: 0,
            spades: 0,
        };

        const rank: {[key: string]: number } = {
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            J: 0,
            Q: 0,
            K: 0,
            A: 0
        };

        const suitHandAll = this.hand.map(c => c.rank);
        const rankHandAll = this.hand.map(c => c.suit);

        suitHandAll.forEach(s => {
            suit[s]++
        });

        rankHandAll.forEach((r) => {
            rank[r]++
        })

        let pairCountSuit = Object.values(suit);
        let pairCountRank = Object.values(rank);


        let pairCheck = pairCountRank.filter(r => r === 2);

        if (pairCheck.length === 1) {
            return 'One pair';
        } else if (pairCheck.length === 2) {
            return 'Two pair'
        } else if (pairCheck.length === 3) {
            return  'Three pair';
        }

        let fleshCheck = pairCountSuit.filter(s => s === 5);
        if (fleshCheck.length > 0) return 'Flash';

        return 'High card';
    };
}

export default PokerHand;