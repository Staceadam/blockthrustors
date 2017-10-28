// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';
import { getShows } from './actionCreators';

class Search extends Component {
  componentDidMount() {
    if (!this.props.shows) {
      this.props.getAPIData();
    }
  }

  props: {
    searchTerm: string, // eslint-disable-line react/no-unused-prop-types
    shows: Array<Show>,
    getAPIData: Function,
  };

  render() {
    const { shows, searchTerm } = this.props;

    if (!shows) {
      return <div>Loading...</div>;
    }

    return (
      <div className="search">
        <Header showSearch />
        <div>
          {shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(searchTerm.toUpperCase()) >= 0,
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  shows: state.shows[0],
});

const mapDispatchToProps = (dispatch: Function) => ({
  getAPIData() {
    dispatch(getShows());
  },
});

export const Unwrapped = Search;
export default connect(mapStateToProps, mapDispatchToProps)(Search);
