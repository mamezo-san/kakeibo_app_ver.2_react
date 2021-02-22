import axios from 'axios';

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const HANDLECLICK1 = 'HADLECLICK1'
export const HANDLECLICK2 = 'HADLECLICK2'

export const READ_EVENTS = 'READ_EVENTS'

export const increment =()  => ({
    type: INCREMENT
})

export const decrement =()  => ({
    type: DECREMENT
})

export const handleClick1 =() =>({
    type: HANDLECLICK1
})

export const handleClick2 =() =>({
    type: HANDLECLICK2
})

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents =() => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch ({type: READ_EVENTS, response})
}