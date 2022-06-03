const initialState={
    ApiData:[],
    Page:1,
    myText:'photo'
    
}

const HomeReducer=(state=initialState,action)=>{
    const {type,payload}=action;

    switch (type) {
        case "ADD_DATA":
            return{...state,...payload}
        case "PAGE":
            return{...state,...payload}
        case "SET_TEXT":
            return{...state,...payload}
        default:
            return{...state}
    }
}

export default HomeReducer;