import axios from 'axios';

const ApiCall =  (text) => {

  return (dispatch, getState) => {
    const {
      HomeReducer: {ApiData, Page, myText, mainLoading, listLoading},
    } = getState();

    if (text === '' || text === undefined) text = 'photo';

    console.log(text, myText, ApiData, Page, mainLoading, listLoading);

    console.log('apihit');

    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${Page}&query=${text}&per_page=10&client_id=DG0CrUMFOD7-u5ejk-htJzedtB2dMah2RSmNrDC4WT4`,
      )
      .then(resp => {
        console.log('Api Hit Success');

  
          if (ApiData.length > 0 && Page > 1) {
            dispatch({type: 'ADD_DATA',payload: {ApiData: [...ApiData, ...resp.data.results]}})
             dispatch({type: 'SET_LISTLOAD', payload: {listLoading: false}});
             console.log('listData set');
  
          } else {
            console.log('maindata set');
          dispatch({type: 'ADD_DATA', payload: {ApiData: resp.data.results}});
          }
  
        

       
        dispatch({type: 'SET_TEXT', payload: {myText: text}});
        dispatch({type: 'SET_MAINLOAD', payload: {mainLoading: false}});

      })

      .catch(err => {
        
        dispatch({type:'SET_MAINLOAD',payload:{mainLoading:false}})

        console.log(err);
      });
  };
  };


export default ApiCall;
