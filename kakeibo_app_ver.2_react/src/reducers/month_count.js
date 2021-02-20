import { INCREMENT,DECREMENT, HANDLECLICK1,HANDLECLICK2 } from '../actions/index'

const initialState = {value:1}

export default(state = initialState , action) =>{
    switch(action.type){
        case INCREMENT:
            return{ value: state.value+1 }
        case DECREMENT:
            return{ value: state.value-1 }
        case HANDLECLICK1:
            return{ value: state.value=1 }
        case HANDLECLICK2:
            return{ value: state.value=2 }
        default:
            return state
    }
}