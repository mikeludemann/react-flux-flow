import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import CardContainer from './cards/CardContainer';
import Github from './github/Github';
import Quiz from './quiz/Quiz';
import Movies from './movies/components/Movies';

class Main extends Component {
  render() {
    var content = '';
    if (this.props.page === 'about') {
      content = <Jumbotron />
    }
    if (this.props.page === 'cards') {
      content = <CardContainer />
    }
    if (this.props.page === 'github') {
      content = <Github />
    }
    if (this.props.page === 'quiz') {
      content = <Quiz />
    }
    if (this.props.page === 'movies') {
      content = <Movies />
    }

    return (
      <main role="main">
        {content}
      </main>
    );
  }
}

export default Main;
