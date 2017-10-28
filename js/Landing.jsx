// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm, getShows } from './actionCreators';

class Landing extends Component {
  componentDidMount() {
    if (!this.props.shows) {
      this.props.getAPIData();
    }
  }

  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    getAPIData: Function,
    history: RouterHistory,
    shows: Show,
  };

  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  render() {
    const { handleSearchTermChange, searchTerm } = this.props;
    return (
      <div className="landing">
        <h1>Blockthrusters</h1>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={handleSearchTermChange}
            value={searchTerm}
            type="text"
            placeholder="Search"
          />
        </form>
        <Link to="/search">or Browse All</Link>
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

  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
