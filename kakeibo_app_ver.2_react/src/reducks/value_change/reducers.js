import * as Actions from './actions'
import initialState from '../store/initilState'


export const valueChange = (state = initialState.valueChange , action) =>{
    switch(action.type){
        case Actions.INCREMENT:
            return{ 
                ...state,
                ...action.payload
            }
        case Actions.DECREMENT:
            return{ 
                ...state,
                ...action.payload
             }
        case Actions.HANDLECLICK1:
            return{ 
                ...state,
                ...action.payload
            }
        case Actions.HANDLECLICK2:
            return{ 
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}