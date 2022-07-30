const closetReducer = (state = [], action) => {
    if( action.type === 'SET_CLOSET' ) {
        return action.payload;
    }
    return state;
}

export default closetReducer;