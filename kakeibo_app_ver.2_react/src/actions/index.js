import axios from 'axios';

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const HANDLECLICK1 = 'HADLECLICK1'
export const HANDLECLICK2 = 'HADLECLICK2'

export const READ_EVENTS = 'READ_EVENTS'

export const CLICKOPEN ='CLICKOPEN' 
export const CLICKCLOSE = 'CLICKCLOSE'

//ここからmonth_count
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
//ここからEvent_index
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents =() => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch ({type: READ_EVENTS, response})
}

//ここからclickopen
// export const clickOpen = () => ({
//     type: CLICKOPEN 
// })

// export const clickOpen = ()=> {
//     return {
//         type: CLICKOPEN,
//         open: {
//             isModalOpen: true
//         }
//     }
// }

// export const clickClose = () => {
//     return {
//         type: CLICKCLOSE,
//         close:{
//             isModalClose: false
//         }
//     } 
// }