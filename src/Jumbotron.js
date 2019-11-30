import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
	constructor(props) {
		super(props);
		this.state = {action: 'main'};

		this.callToAction = this.callToAction.bind(this);
		this.secondaryAction = this.secondaryAction.bind(this);
	}

	callToAction() {
		this.setState({action: 'main'})
	}

	secondaryAction() {
		this.setState({action: 'secondary'})
	}

	render() {
		var mainClass = 'jumbotron text-center';
		if(this.state.action === 'main') {
			mainClass = 'jumbotron text-center main';
		} else {
			mainClass = 'jumbotron text-center';
		}
		return (
			<section className={mainClass}>
				<div className="container" action={this.state.action}>
					<h1 className="jumbotron-heading">React Tutorial</h1>
					<p className="lead text-muted">This is my jumbotron.</p>
					<p>
						<a onClick={this.callToAction} className="btn btn-primary my-2">Main call to action</a>
						<a onClick={this.secondaryAction} className="btn btn-secondary my-2">Secondary action</a>
					</p>
				</div>
			</section>
		);
	}
}

export default Jumbotron;
