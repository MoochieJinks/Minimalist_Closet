const closetReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CLOSET':
            return action.payload;
        default:
            return state;
    }
}

export default closetReducer;