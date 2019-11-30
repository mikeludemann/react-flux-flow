import React, { Component } from 'react';
import QuestionList from './QuestionList'
import Score from './Score'

class Quiz extends Component {
	constructor(props) {
		super(props);
		this.state = { questions: [
			{
				id: 1,
				text: 'What is your name?',
				choices: [
					{id: 1, text: 'Jim'},
					{id: 2, text: 'Mike'},
					{id: 3, text: 'Alex'},
				],
				correctId: 2
			},
			{
				id: 2,
				text: 'What is a capital of UK?',
				choices: [
					{id: 1, text: 'Cologne'},
					{id: 2, text: 'London'},
					{id: 3, text: 'Paris'},
				],
				correctId: 1
			},
			{
				id: 3,
				text: 'What is a capital of Germany?',
				choices: [
					{id: 1, text: 'London'},
					{id: 2, text: 'Dublin'},
					{id: 3, text: 'Berlin'},
				],
				correctId: 3
			}
		],
		score: 0,
		current: 1};
	}

	setScore(score) {
		this.setState({score});
	}
	setCurrent(current) {
		this.setState({current});
	}

	render() {
		var showQuestionsNumber = true;
		if (this.state.current > this.state.questions.length) {
			showQuestionsNumber = false;
		}
		return (
			<div className="album py-5 bg-light">
				<h1>Quiz</h1>
				<Score {...this.state} showQuestionsNumber={showQuestionsNumber} />
				<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
			</div>
		);
	}
}

export default Quiz;
