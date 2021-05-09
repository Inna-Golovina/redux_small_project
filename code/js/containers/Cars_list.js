import React from 'react';
import {bindActionCreators} from 'redux';
import{connect} from 'react-redux';

class CarsList extends React.Component {
  showList () {
    return this.props.cars.map ((car) => {
      return (
        <li key={car.id}>{car.name}</li>
      )
    })
  }
  render () {
    return (
      <ol>
        {this.showList ()}
      </ol>
    )
  }
}

function mapStatetoProps (state) {
  return {
    cars: state.cars
  }
}

export default connect(mapStatetoProps)(CarsList);