import { combineReducers } from 'redux'
import CarRedusers from './car';
import ActiveCar from './car_active'

const allRedusers = combineReducers ({
  cars: CarRedusers,
  active: ActiveCar
});

export default allRedusers;