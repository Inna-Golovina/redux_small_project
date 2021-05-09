import { combineReducers } from 'redux'
import CarRedusers from './car';

const allRedusers = combineReducers ({
  cars: CarRedusers
});

export default allRedusers;