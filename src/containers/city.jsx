import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions';

class City extends Component {
  handleClick = () => {
    const { city } = this.props;
    this.props.setActiveCity(city);
  }

  render() {
    const { city } = this.props;
    let containerClasses = "list-group-item";
    if (this.props.city === this.props.ActiveCity) {
      containerClasses += " active";
    }
    return (
      <div
        role="presentation"
        className={containerClasses}
        onClick={this.handleClick}
      >
        <h1>{city.name}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ActiveCity: state.ActiveCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity }, dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
