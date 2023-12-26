// Write your code here.
import './index.css'
import {Component} from 'react'

const logoUrl = 'https://assets.ccbp.in/frontend/react-js/game-logo-img.png'

class NavBar extends Component {
  renderScores = () => {
    const {currentScore, topScore, isGameEnd} = this.props
    if (isGameEnd) {
      return null
    }
    return (
      <div className="score-box">
        <p className="score-tag">Score: {currentScore}</p>
        <p className="score-tag">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="logo-name-box">
          <img className="navbar-logo" src={logoUrl} alt="emoji logo" />
          <h1 className="logo-name">Emoji Game</h1>
        </div>
        {this.renderScores()}
      </div>
    )
  }
}

export default NavBar
