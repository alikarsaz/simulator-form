
const initialState={
    data:{}
}


const reducer =(state=initialState,action)=>{

    switch (action.type){
        case 'GLOBALSAVE' :
            const newState= action.value;
            // newState=action.value;
            console.log(newState)
            return newState
    
        default:
            return state;
    }
    
}

export default reducer;