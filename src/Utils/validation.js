import regex from "./regex"


export const CheckVlaidation = (data) => {
  const {type,text}=data;
  switch (type) {
      case "email":
          return(regex.emailRegex.test(text))
  
      case "password":
          
        return(regex.passwordRegex.test(text))
  
      default:
          break;
  }  
    
}


