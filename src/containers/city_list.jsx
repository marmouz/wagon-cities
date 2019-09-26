import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city';
import { setCities } from '../actions';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    const { cities } = this.props;
    return (
      <div className="cities">
        {cities.map((city) => {
          return <City city={city} key={city.name} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities }, dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
