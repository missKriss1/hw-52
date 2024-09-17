import * as React from "react";

interface Card {
    suit: string,
    rank: string
}

const Cards: React.FC <Card> = ({suit, rank}) => {
    const suitSymb: { [key: string]: string } = {
        diams: '♦',
        hearts: '♥',
        clubs: '♣',
        spades: '♠',
    };

    console.log(suit)
    console.log(rank)
    console.log()

    return (
        <div>
             <span className={`card rank-${suit.toLowerCase()} ${rank}`}>
                 <span className="rank">{suit}</span>
                 <span className="suit">{suitSymb[rank]}</span>
             </span>
        </div>
    );
};


export default Cards;