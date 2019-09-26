/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { connect } from "react-redux";

class ActiveCity extends Component {
  render() {
    if (!this.props.activeCity) {
      return (
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      );
    }
    const src = `https://kitt.lewagon.com/placeholder/cities/:${this.props.ActiveCity.slug}`;
    return (
      <div className="active-city">
        <h3>{this.props.ActiveCity.name}</h3>
        <p>{this.props.ActiveCity.address}</p>
        <img src={src} alt="" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ActiveCity: state.ActiveCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
