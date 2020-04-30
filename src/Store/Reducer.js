const initialState ={
    counter:0
}



const reducer =  (state=initialState,action) =>{
    if(action.type==='Increment')
    return {
        counter:state.counter+1
    };

}

export default reducer;