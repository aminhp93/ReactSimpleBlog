import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

	componentWillMount(){
		console.log("this would be a good time to call an action")
		this.props.fetchPosts();
	}

    render() {
        return (
            <div className="text-xs-right">
                <Link to="posts/new" className="btn btn-primary">Add a post</Link>
                List of blog post
            </div>
        );
    }
}

export default connect(null, {fetchPosts})(PostsIndex);
