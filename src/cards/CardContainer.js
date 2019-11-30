import React, { Component } from 'react';
import Card from './Card.js';

class CardContainer extends Component {
	render() {
		return (
			<div className="album py-5 bg-light">
				<div className="container">
					<div className="row">
					<Card text="first card"/>
					<Card text="second card"/>
					<Card />
				</div>
			</div>
		</div>
		);
	}
}

export default CardContainer;
