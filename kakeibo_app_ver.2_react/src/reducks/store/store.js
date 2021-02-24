import { createStore as reduxCreateStore, combineReducers } from 'redux';

// import { ProductsReducer }
import { valueChange } from '../value_change/reducers';

export default function createStore() {
    return reduxCreateStore (
        combineReducers({
            valueChange: valueChange,
        })
    );
}