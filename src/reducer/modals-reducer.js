export const modalReducer =(state,{type})=>{
switch(type){
case "IS_SIGNUP_MODAL_OPEN":
    return{
        ...state,
        isSignUpModalOpen:!state.isSignUpModalOpen
    }

default:
    return state
}
}