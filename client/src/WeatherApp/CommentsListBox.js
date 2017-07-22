import React from 'react';
import CommentForm from './CommentForm';
import CommentBox from './CommentBox';
import { connect } from 'react-redux';
import { fetchWeather,deleteWeather ,addWeatherComment} from "../actions/weatherActions"

@connect((store) => {
  return {
    boxes: store.weather.boxes,
  };
})
class CommentsListBox extends React.Component {
  constructor(props) {
        super(props);
        //bind this to functions
        this.addComment = this.addComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }
    addComment(str){
        this.props.dispatch(addWeatherComment(this.props.id,str))
    };
    deleteComment(str){
         this.props.dispatch(deleteWeatherComment(this.props.id,str))
    };

  render() {
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
    const comments = this
      .props
      .comments
      .map((item, index) => <CommentBox
        item={item}
        deleteComment={this.deleteComment}
        {...item}
        key={index}/>)
    return (
      <div>
        <CommentForm addComment={this.addComment}/> {comments}
      </div>
    )
  }
}

export default CommentsListBox;