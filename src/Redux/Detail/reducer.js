const initialState={
    photosList:[],
    page:1,
    photosListLoader:false,
}

const DetailReducer = (state=initialState,action) => { 
    const {type,payload}=action;

    switch (type) {
        case "ADD_LIST":
            
            return{...state,...payload}
    
        case "INCREASE_PAGE":
            
            return{...state,...payload}
    
        case "LOADER":
            
            return{...state,...payload}
    
        default:
            return{...state}        
    }
 }

 export default DetailReducer;