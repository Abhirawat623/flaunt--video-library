export const validateName =(username)=>{
    const regex =   /^[a-zA-Z\s]+$/;
  
    return regex.test(username)
}