import { combineReducers } from 'redux';
import monthCount from './month_count';
import eventIndex from './eventIndex';
import clickOpen from './clickOpen'

export default combineReducers ({monthCount,eventIndex,clickOpen});