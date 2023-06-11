const initialState={
    value:0
};
export const dataReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case "INCREMENT":
            return{value:state.value+payload};
            case "DECREMENT":
                return{value:state.value-payload};
                default:
                    return state;
    }
};