import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
	render() {
		return (
			<div className="row">
				<div className="card profile-card">
					<div className="card-body">
						<h5 className="card-title">{this.props.userData.name}</h5>
						<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
						<div className="row">
							<div className="col-md-4">
								<img src={this.props.userData.avatar_url} className="card-img-top" alt="yo"/>
							</div>
							<div className="col-md-8">
								<div className="row">
									<div className="col-md-12">
										<span className="badge badge-primary">{this.props.userData.public_repos} repos</span>
										<span className="badge badge-secondary">{this.props.userData.followers} followers</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
