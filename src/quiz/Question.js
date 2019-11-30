import React, { Component } from 'react';

class Question extends Component {
	constructor(props) {
		super(props);
		this.choiceSelection = this.choiceSelection.bind(this);
	}

	choiceSelection(e) {
		e.preventDefault();
		const { setCurrent, setScore, question } = this.props;
		let selected = e.target.value;
		if (selected == question.correctId) {
			setScore(this.props.score + 1);
		}
		setCurrent(this.props.current + 1);
	}

	render() {
		const question = this.props.question;
		return (
			<div className="card box-shadow">
				<div className="card-body">
					<h4>{question.text}</h4>
					<ul className="list-group">
						{
							question.choices.map(choice => {
								return(
									<li className="list-group-item"
										key={choice.id}>
										<div className="row">
											<div className="col">
												<input type="radio"
													onChange={this.choiceSelection}
													name={question.id}
													value={choice.id}>
												</input>
											</div>
											<div className="col">
												<p>{choice.text}</p>
											</div>
										</div>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		);
	}
}

export default Question;
