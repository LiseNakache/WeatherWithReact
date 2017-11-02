import React from 'react';
import CommentsForm from './CommentsForm';
import CommentsListBox from './CommentsListBox';

class WeatherBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { comments: [] }
        this.onSubmitCommentForm = this.onSubmitCommentForm.bind(this);
        this.deleteCity = this.deleteCity.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
    }


    onSubmitCommentForm(comment, username) {

        var oneComment = {
            comment: comment,
            username: username,
        };

        this.setState((prevState) => ({
            comments: prevState.comments.concat(oneComment)
        }));

        // this.setState((prevState) => ({
        //     comments: prevState.comments.concat(oneComment)
        // }), () => {
        //     console.log(`state: ${this.state.comments}`);
        // });

        console.log(this.state)
    };


    deleteCity() {
        this.props.delete(this.props.index)
    }

    deleteComment(indexComment) {
        this.setState((prevState) => ({
            comments: prevState.comments.filter((_, i) => i !== indexComment)
        }));
    }

    render() {
        return (
            <div className="equalHMV eq">
                <div className="media">
                    <span className="glyphicon glyphicon-trash pull-right"></span>
                    <div className="media-left">

                        <h4 className="media-heading">{this.props.item.name}
                            <img src={this.props.item.icon} className="media-object" />
                            <a className="delete" onClick={this.deleteCity}>Delete City</a>
                        </h4>

                    </div>
                    <div className="media-body">
                        <p>{this.props.item.text}- {this.props.item.feelslike_c} &nbsp;| C</p>
                    </div>
                </div>
                <CommentsForm onSubmitCommentForm={this.onSubmitCommentForm} />
                <CommentsListBox comments={this.state.comments} deleteComment={this.deleteComment} />
            </div>
        )
    }
}

export default WeatherBox;