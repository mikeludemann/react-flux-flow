import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {page: 'movies'};

		this.handleShowAbout = this.handleShowAbout.bind(this);
		this.handleShowCards = this.handleShowCards.bind(this);
		this.handleShowGithub = this.handleShowGithub.bind(this);
		this.handleShowQuiz = this.handleShowQuiz.bind(this);
		this.handleShowMovies = this.handleShowMovies.bind(this);
	}

	handleShowAbout() {
		this.setState({page: 'about'})
	}

	handleShowCards() {
		this.setState({page: 'cards'})
	}

	handleShowGithub() {
		this.setState({page: 'github'})
	}

	handleShowQuiz() {
		this.setState({page: 'quiz'})
	}

	handleShowMovies() {
		this.setState({page: 'movies'})
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="collapse bg-dark" id="navbarHeader">
						<div className="container">
							<div className="row">
								<a onClick={this.handleShowAbout} className="btn btn-primary my-2">About</a>
								<a onClick={this.handleShowCards} className="btn btn-primary my-2">Cards</a>
								<a onClick={this.handleShowGithub} className="btn btn-primary my-2">Github</a>
								<a onClick={this.handleShowQuiz} className="btn btn-primary my-2">Quiz</a>
								<a onClick={this.handleShowMovies} className="btn btn-primary my-2">Movies</a>
							</div>
						</div>
					</div>
					<div className="navbar navbar-light box-shadow">
						<div className="container d-flex justify-content-between">
							<a className="navbar-brand d-flex align-items-center">
								<strong>React - Flux - Flow</strong>
							</a>
							<button className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarHeader"
								aria-controls="navbarHeader"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
						</div>
					</div>
				</header>
				<section className="content">
					<img src={logo} className="App-logo" alt="logo" />
					<Main page={this.state.page}/>
				</section>
				<footer className="App-footer text-muted border-top">
					<div className="container">
						(c) Copyright - Mike Ludemann
					</div>
				</footer>
			</div>
		);
	}
}

export default App;
