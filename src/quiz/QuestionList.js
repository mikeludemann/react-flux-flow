import React, { Component } from 'react';
import Question from './Question'

class QuestionList extends Component {
	render() {
		return (
			<div className="container">
				{
					this.props.questions.map( question => {
						if (question.id === this.props.current) {
							return <Question
								question={question}
								key={question.id}
								score={this.props.score}
								current={this.props.current}
								setScore={this.props.setScore}
								setCurrent={this.props.setCurrent} />
						}
					})
				}
			</div>
		);
	}
}

export default QuestionList;
