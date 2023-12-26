// Write your code here.
import './index.css'

const winImageUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImageUrl =
  'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const winningStatus = isWon ? 'You Won' : 'You Lose'
  const scoreType = isWon ? 'Best Score' : 'Score'
  const scoreImg = isWon ? winImageUrl : loseImageUrl
  //   const altText = isWon ? 'win' : 'lose'
  return (
    <div className="win-or-lose-container">
      <div className="final-score-details">
        <h1 className="heading-tag">{winningStatus}</h1>
        <p className="p-tag">{scoreType}</p>
        <p className="score-tag">{score}/12</p>
        <button className="button" type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img className="won-image" src={scoreImg} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
