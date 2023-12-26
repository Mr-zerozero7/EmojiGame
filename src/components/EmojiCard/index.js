// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onClickEmojiItem = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card" onClick={onClickEmojiItem}>
      <button className="icon-button" type="button">
        <img className="emoji-icon" key={id} src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
