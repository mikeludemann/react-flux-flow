import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import RepoList from './RepoList';
import GithubSearch from './GithubSearch';
import './Github.css';
import * as $ from 'jquery';


class Github extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'mikeludemann',
			userData: [],
			userRepos: [],
			perPage: 5
		}

		this.getUserData = this.getUserData.bind(this);
		this.getUserRepos = this.getUserRepos.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	getUserData() {
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({userData: data});
			}.bind(this),
			error: function(xhr, status, err) {
				this.setState({username: null});
				console.log(status, err);
			}.bind(this)
		});
	}

	getUserRepos() {
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({userRepos: data});
			}.bind(this),
			error: function(xhr, status, err) {
				this.setState({username: null});
				console.log(status, err);
			}.bind(this)
		});
	}

	handleFormSubmit(username) {
		this.setState({username: username}, function() {
			this.getUserData();
			this.getUserRepos();
		})
	}

	componentDidMount() {
		this.getUserData();
		this.getUserRepos();
	}
	render() {
		var componentClass, disableMessage;
		if (this.state.userData.length === 0) {
			componentClass = 'container hidden';
			disableMessage = 'visible';
		} else {
			componentClass = 'container';
			disableMessage = 'hidden';
		}
		return (
			<div className='github'>
				<div className={componentClass}>
					<GithubSearch onFormSubmit = {this.handleFormSubmit}/>
					<div className="row">
						<Profile userData= {this.state.userData}/>
					</div>
					<div className="row">
						<RepoList userRepos={this.state.userRepos} />
					</div>
				</div>
				<p className={disableMessage}>No profile data</p>
			</div>
		);
	}
}

Github.propTypes ={
	clientId: PropTypes.string,
	clientSecret: PropTypes.string
}

export default Github;
