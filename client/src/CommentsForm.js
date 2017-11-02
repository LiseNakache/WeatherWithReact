import React from 'react';
// import CommentsListBox from './CommentsBox';

class CommentsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comment: '', username: '' }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.onSubmitCommentForm(this.state.comment,this.state.username)
        console.log(this.state)
        this.setState({ comment: '', username: '' });
    }


    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        return (
            <form action="#" id="getWeatherComment" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control-comment"
                        id="comment"
                        placeholder="Enter comment"
                        required
                        value={this.state.comment}
                        onChange={this.handleChange} />
                    <input
                        type="text"
                        className="form-control-comment"
                        id="username"
                        placeholder="Enter username"
                        required
                        value={this.state.username}
                        onChange={this.handleChange} />
                        <span className="input-group-btn"><br />
                        <button className="btn btn-primary bnt-comment" type="submit">Add Comment</button>
                    </span>
                </div>
            </form>
        )
    }
}

export default CommentsForm;