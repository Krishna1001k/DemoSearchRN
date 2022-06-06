import axios from 'axios';

const ApiCall = (text,CallBackFun) => {


  return (dispatch, getState) => {


    const {HomeReducer: {ApiData, Page,myText}} = getState()

    if(text===''||text===undefined) text='photo'

    console.log(text,myText, ApiData, Page)


      console.log('apihit');

      axios
      .get(
        `https://api.unsplash.com/search/photos?page=${Page}&query=${text}&per_page=30&client_id=DG0CrUMFOD7-u5ejk-htJzedtB2dMah2RSmNrDC4WT4`
      )
      .then(resp => {

        console.log('Api Hit Success');
        ApiData&&Page>1
          ? dispatch({type: 'ADD_DATA',payload:{ApiData: [...ApiData, ...resp.data.results]}})
          : dispatch({type: 'ADD_DATA', payload: {ApiData: resp.data.results}});

          dispatch({type:'SET_TEXT',payload:{myText:text}})

          CallBackFun(true) 

      })

      .catch(err => {CallBackFun(false),console.log(err)})}
  };


export default ApiCall;
