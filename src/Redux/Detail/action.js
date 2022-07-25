import axios from "axios";

const PhotosListApiCall = (user) => { 
    const {username}=user;


console.log('detail screen user name->',username);

    return (dispatch,getState)=>{

        const {DetailReducer:{photosList,page}}=getState();

        axios.get(`https://api.unsplash.com/users/${username}/photos?page=${page}&per_page=15&client_id=DG0CrUMFOD7-u5ejk-htJzedtB2dMah2RSmNrDC4WT4`).then((resp)=>{


       console.log('Detail screen api hit success with data->',resp,'and page no->',page);

        if(page>1){
            dispatch({type:"ADD_LIST",payload:{photosList:[...photosList,...resp.data]}})
        }
        else{
            dispatch({type:"ADD_LIST",payload:{photosList:[...resp.data]}})
        }
        if(resp.data.length>0){
            dispatch({type:'LOADER',payload:{photosListLoader:false}})
        }
       

         

        })
        .catch((err)=>{
            console.log('detail screen api error->',err);
        })
    }
 }

 export default PhotosListApiCall;