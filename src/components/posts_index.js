import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';


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
            <div>List of blog post</div>
        );
    }
}

export default connect(null, {fetchPosts})(PostsIndex);
