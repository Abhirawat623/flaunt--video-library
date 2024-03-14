export const videoReducer =(state,{type,payload})=>{
switch(type){
case "CATEGORY":
    return{
        ...state,
       clickedCategory: payload
    }
case "LIKED_VIDEO":
    return{
        ...state,
        likedVideo:payload
    }
case "HISTORY_VIDEO":
    return{...state,
        historyVideo:payload}
default:
    return state
}
}