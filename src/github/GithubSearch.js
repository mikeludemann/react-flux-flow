import React, { Component } from 'react';

class GithubSearch extends Component {

	constructor(props) {
		super(props);
		this.state = {page: 'about'};

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		let username = this.refs.username.value.trim();
		if(!username) {
			console.log('no username');
			return;
		}
		this.props.onFormSubmit(username);
		this.refs.username.value = '';
	}

	render() {
		return (
			<div className="row">
				<form onSubmit={this.onSubmit.bind(this)}>
					<label>Search</label>
					<input type="text" ref="username" className="form-control" />
				</form>
			</div>
		);
	}
}

export default GithubSearch;
