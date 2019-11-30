import React, { Component } from 'react';

class Score extends Component {
	render() {
		var questionsClass = '';
		if (!this.props.showQuestionsNumber) {
			questionsClass = 'hidden';
		}
		return (
			<div className="well">
				<p className={questionsClass}>question {this.props.current} / {this.props.questions.length}</p>
				<h2>Score: {this.props.score}</h2>
			</div>
		);
	}
}

export default Score;
