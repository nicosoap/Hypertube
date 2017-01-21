import React				from 'react'
import lang					from '../../lang'
import api					from '../../apiCall'

import MiniProfile	from '../MiniProfile'
import IconClickable		from '../IconClickable'

const Comment = ({ comment, username, l, movieID, onCommentsUpdate }) => {
	const handleRemove = ({ data }) => {
		if (data.status && data.status.includes('success')) {
			onCommentsUpdate(data.comments)
		}
	}

	const removeComment = () => {
		api.removeComment({ id: movieID, commentId: comment.id })
			.then(handleRemove)
	}
	return (
		<li className="comment">
			<MiniProfile author={comment.author} l={l} />
			<p className="author">{comment.author.username}</p>
			<p className="commentText">{comment.text}</p>
			{username === comment.author.username &&
				<IconClickable
					className="removeComment"
					tooltip={lang.remove[l]}
					click={removeComment}
				>
					<i className="material-icons removeComment">remove_circle</i>
				</IconClickable>
			}
		</li>
	)
}

export default Comment
