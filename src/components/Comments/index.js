import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const initialCommentsList = []
class Comments extends Component {
  state = {commentsList: initialCommentsList, name: '', comment: ''}

  onClickLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const randomNumber = Math.floor(Math.random() * 8)
    const duration = formatDistanceToNow(new Date())
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
      randomNumber,
      duration,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeText = event => {
    this.setState({comment: event.target.value})
  }

  deleteComment = uniqueId => {
    const {commentsList} = this.state
    const filteredComments = commentsList.filter(each => each.id !== uniqueId)
    this.setState({commentsList: filteredComments})
  }

  render() {
    const {name, comment, commentsList} = this.state

    return (
      <div className="comments-container">
        <h1 className="comment-heading">Comments </h1>
        <div className="form-image">
          <div>
            <p className="something-text">
              Say something about 4.0 Technologies{' '}
            </p>
            <form onSubmit={this.onAddComment} className="input-form">
              <input
                className="input-name"
                type="text"
                onChange={this.onChangeName}
                value={name}
                placeholder="Your Name"
              />
              <textarea
                className="text-area"
                value={comment}
                type="textarea"
                cols="6"
                rows="40"
                onChange={this.onChangeText}
                placeholder="Your Comment"
              />
              <button type="submit" className="add-button">
                Add Comment{' '}
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
            />
          </div>
        </div>
        <hr className="line" />
        <div>
          <p>
            <span className="total-comments">{commentsList.length}</span>
            Comments
          </p>
          <ul className="comments-container">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                onClickLike={this.onClickLike}
                colorsList={initialContainerBackgroundClassNames}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
