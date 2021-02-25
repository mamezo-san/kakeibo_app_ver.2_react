import { createStore as reduxCreateStore, 
    combineReducers,
    applyMiddleware } from 'redux';

import { connectRouter, routerMiddleware } from 'connected-react-router'
import { valueChange } from '../value_change/reducers';

export default function createStore(history) {
    return reduxCreateStore (
        combineReducers({
            router: connectRouter(history),
            valueChange: valueChange,
        }),
        applyMiddleware(
            routerMiddleware(history)
        )
    );
}