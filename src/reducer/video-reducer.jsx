export const videoReducer =(state,{type,payload})=>{
switch(type){
case "CATEGORY":
    return{
        ...state,
       clickedCategory: payload
    }

default:
    return state
}
}