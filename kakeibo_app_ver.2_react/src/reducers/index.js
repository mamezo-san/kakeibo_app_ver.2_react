import { combineReducers } from 'redux';
import monthCount from './month_count';
import eventIndex from './eventIndex';

export default combineReducers ({monthCount,eventIndex});