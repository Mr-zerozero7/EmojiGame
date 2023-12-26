/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {topScore: 0, selectedEmojis: [], isGameEnd: false}

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {selectedEmojis} = this.state
    const isPresent = selectedEmojis.includes(id)
    if (isPresent) {
      this.finishGameAndSetTopScore(selectedEmojis.length)
    } else {
      if (emojisList.length - 1 === selectedEmojis.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        selectedEmojis: [...prevState.selectedEmojis, id],
      }))
    }
  }

  finishGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore})
    }
    this.setIsGameEnd(true)
  }

  setIsGameEnd = value => {
    this.setState({isGameEnd: value})
  }

  restartGame = () => {
    this.setState({selectedEmojis: []})
    this.finishGameAndSetTopScore()
    this.setIsGameEnd(false)
  }

  renderWinOrLose = () => {
    const {emojisList} = this.props
    const {selectedEmojis} = this.state
    const isWon = emojisList.length === selectedEmojis.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.restartGame}
        score={selectedEmojis.length}
      />
    )
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <div className="emoji-container">
        {shuffledEmojisList.map(emojiItem => (
          <EmojiCard
            emojiDetails={emojiItem}
            key={emojiItem.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </div>
    )
  }

  render() {
    const {topScore, selectedEmojis, isGameEnd} = this.state
    // const {emojisList} = this.props
    const currentScore = selectedEmojis.length

    console.log(isGameEnd)
    return (
      <div className="container">
        <NavBar
          topScore={topScore}
          currentScore={currentScore}
          isGameEnd={isGameEnd}
        />
        <div className="bottom-page">
          {isGameEnd ? this.renderWinOrLose() : this.renderEmojiList()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
