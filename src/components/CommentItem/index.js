import './index.css'

const CommentItem = props => {
  const {commentDetails, onClickLike, colorsList, deleteComment} = props
  const {id, name, comment, isLike, randomNumber, duration} = commentDetails
  const nameLetter = name[0]
  const likeImgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeText = isLike ? 'like-text' : ''
  const clickLikeSymbol = () => {
    onClickLike(id)
  }
  const onDelete = () => {
    deleteComment(id)
  }
  return (
    <li>
      <div className="letter-name-content">
        <p
          style={{backgroundColor: colorsList[randomNumber]}}
          className="name-letter"
        >
          {nameLetter}
        </p>
        <div className="name-time-comment">
          <div className="name-content">
            <p className="name">{name}</p>
            <p className="date-time">{duration}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete">
        <div className="like-symbol-text">
          <button
            type="button"
            onClick={clickLikeSymbol}
            className="symbol-button"
          >
            <img src={likeImgUrl} className="like-symbol" alt="like" />
          </button>
          <p className={likeText} onClick={clickLikeSymbol}>
            Like
          </p>
        </div>
        <button
          type="button"
          onClick={onDelete}
          className="delete-button"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
