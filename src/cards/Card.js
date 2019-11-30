import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
	render() {
		return (
			<div className="col-md-4">
				<div className="card mb-4 box-shadow">
					<div className="card-body">
						<p className="card-text">{this.props.text}</p>
						<div className="d-flex justify-content-between align-items-center">
							<div className="btn-group">
								<button type="button" className="btn btn-sm btn-success">View</button>
								<button type="button" className="btn btn-sm btn-danger">Edit</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Card.propTypes ={
	text: PropTypes.string
}

Card.defaultProps ={
	text: 'Default card text'
}

export default Card;
