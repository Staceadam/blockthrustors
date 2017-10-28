// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Match } from 'react-router-dom';
import Header from './Header';

class Details extends Component {
  componentDidMount() {}
  props: {
    shows: Show,
    match: Match,
  };

  render() {
    const selectedShow = this.props.shows.find(
      (show: Show) => this.props.match.params.id === show.imdbID,
    );

    const { title, description, year, poster, trailer, rating } = selectedShow;
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          <h3>{rating}</h3>
          <img
            src={`/public/img/posters/${poster}`}
            alt={`Poster for ${title}`}
          />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: state.shows[0],
});

export default connect(mapStateToProps)(Details);
