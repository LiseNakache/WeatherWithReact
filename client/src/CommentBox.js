import React from 'react';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this)
    }

    deleteComment() {
        this.props.deleteComment(this.props.indexComment)
    }

    render() {
        return (
            <div className="allComments">
                <ul>
                    <li>{this.props.item.comment}, {this.props.item.username}
                        <a className="deleteComment" onClick={this.deleteComment}>Delete Comment</a>
                    </li>

                </ul>
            </div>
        )
    }
}

export default CommentBox;