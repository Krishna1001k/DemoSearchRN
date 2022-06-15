const initialState={
    ApiData:[],
    Page:1,
    myText:'photo',
    mainLoading:false,
    listLoading:false,
    
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
        case "SET_MAINLOAD":
            return{...state,...payload}
        case "SET_LISTLOAD":
            return{...state,...payload}
        default:
            return{...state}
    }
}

export default HomeReducer;