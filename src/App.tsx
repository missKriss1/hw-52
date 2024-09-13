
import './App.css'

const App = () => {

  const suitsObj ={
    diams: "♦",
    hearts: "♥",
    culbs: "♣",
    spades: "♠"
  };

  return (
      <>
      <span className="card rank-k diams">
            <span className="rank">K</span>
            <span className="suit">{suitsObj.hearts}</span>
      </span>
      </>
  )
};

export default App
