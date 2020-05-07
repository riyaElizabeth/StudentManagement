const initial ={
    counter:0
}



const reducer =  (state=initial,action) =>{
    if(action.type==='Increment')
    return {
        ...state,
        counter:state.counter+1
    };
    if(action.type==='decrement')
    return {
        ...state,
        counter:state.counter-1
    };
}

export default reducer;