import React from 'react';
import CommentBox from './CommentBox';


const CommentsListBox = (props) => {
    console.log(props.comments);
    const commentList = props.comments.map((item, index) =>
        <CommentBox key={index} item={item} deleteComment={props.deleteComment} indexComment={index} />)

    return (
        <div>
            {commentList}
        </div>
    )
}

export default CommentsListBox;
