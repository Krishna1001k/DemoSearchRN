import axios from "axios";

const PhotosListApiCall = (user) => { 
    const {username}=user;
console.log(username);

    return (dispatch,getState)=>{

        const {DetailReducer:{photosList,page}}=getState();

        console.log(page);

        axios.get(`https://api.unsplash.com/users/${username}/photos?page=${page}&per_page=15&client_id=DG0CrUMFOD7-u5ejk-htJzedtB2dMah2RSmNrDC4WT4`).then((resp)=>{


        if(page>1){
            dispatch({type:"ADD_LIST",payload:{photosList:[...photosList,...resp.data]}})
        }
        else{
            dispatch({type:"ADD_LIST",payload:{photosList:[...resp.data]}})
        }
        dispatch({type:'LOADER',payload:{photosListLoader:false}})

        })
        .catch((err)=>{
            console.log(err);
        })
    }
 }

 export default PhotosListApiCall;