/**
 * action generator function for home section api call 
 * @param {*} page 
 * @param {*} text 
 * @returns -> action object
 */
export const sagaApiCall=(page,text)=>{
    if (text === '' || text === undefined) text = 'photo';
    console.log(`SAGA APi CALL with page ${page} and text ${text} `);
   
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${text}&per_page=10&client_id=DG0CrUMFOD7-u5ejk-htJzedtB2dMah2RSmNrDC4WT4`
    return{type:'GET_DATA',payload:{url,page,text}}

}
/**
 * action generator function for user photos  api call in  profile detail section
 * @param {*} username 
 * @param {*} page 
 * @returns -> action object
 */
export const sagaPhotosListApiCall=(username,page)=>{
    let url=`https://api.unsplash.com/users/${username}/photos?page=${page}&per_page=15&client_id=DG0CrUMFOD7-u5ejk-htJzedtB2dMah2RSmNrDC4WT4`;

    return{type:'SAGA_ADD_LIST_PHOTOS',payload:{url,page}}

}

/**
 * action generator function for  post recent search on fire Store 
 * @returns -> action object
 */

export const fireStoreSetFun=()=>{

    return{type:'SET_RECENT_SEACRH_ON_FIRESTORE'}
}

/**
 * action generator function for  get recent search from fire Store 
 * @returns -> action object
 */
export const getFireStoreData=()=>{
    return{type:'GET_RECENT_SEACRH_FROM_FIRESTORE'}
}