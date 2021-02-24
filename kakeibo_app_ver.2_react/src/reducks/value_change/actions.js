export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const HANDLECLICK1 = 'HADLECLICK1'
export const HANDLECLICK2 = 'HADLECLICK2'

export const increment =()  => {
    return{
        type: INCREMENT,
        payload: {
            valueIncre: value+1
        }
    }
}

export const decrement =()  => {
    return{
        type: DECREMENT,
        payload: {
            valueDecre: value-1
        }
    }
}

export const handleClick1 =() =>{
    return{
        type: HANDLECLICK1,
        payload: {
            value1: value=1
        }
    }
}

export const handleClick2 =() =>{
    return{
        type: HANDLECLICK2,
        payload: {
            value2: value=2
        }
    }
}