export const increment=(inputnumber)=>{
    return{
        type:"INCREMENT",
        payload:inputnumber
    };
};

export const decrement=(inputnumber)=>{
    return{
        type:"DECREMENT",
        payload:inputnumber
    };
};