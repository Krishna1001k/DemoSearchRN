import {createReducer} from '@reduxjs/toolkit'

const initialState = {
  ApiData: [],
  Page: 1,
  myText: 'photo',
  text:'',
  mainLoading: false,
  listLoading: false,
  userUid:'',
  recentSearch: [],
};


export const ADD_DATA='ADD_DATA';
export const INCREASE_PAGE='INCREASE_PAGE';
export const SET_SEARCH_TEXT='SET_SEARCH_TEXT';
export const SET_MAINLOAD='SET_MAINLOAD';
export const SET_LISTLOAD='SET_LISTLOAD';
export const SET_USER_UID='SET_USER_UID';
export const SET_RECENT_SEARCH='SET_RECENT_SEARCH';

const HomeReducer = createReducer(initialState,(builder)=>{
  builder.addCase(ADD_DATA,(state,action)=>{
    state.ApiData=action.payload.ApiData
  })

  builder.addCase(INCREASE_PAGE,(state,action)=>{
    state.Page=action.payload.Page
  })
  builder.addCase(SET_SEARCH_TEXT,(state,action)=>{
    state.myText=action.payload.myText
  })
  builder.addCase(SET_MAINLOAD,(state,action)=>{
    state.mainLoading=action.payload.mainLoading
  })
  builder.addCase(SET_LISTLOAD,(state,action)=>{
    state.listLoading=action.payload.listLoading
  })
  builder.addCase(SET_USER_UID,(state,action)=>{
    state.userUid=action.payload.userUid
  })
  builder.addCase(SET_RECENT_SEARCH,(state,action)=>{
    state.recentSearch=action.payload.recentSearch
  })
})

// (state = initialState, action) => {
//   const {type, payload} = action;

//   switch (type) {
//     case 'ADD_DATA':
//       return {...state, ...payload};
//     case 'INCREASE_PAGE':
//       return {...state, ...payload};
//     case 'SET_SEARCH_TEXT':
//       return {...state, ...payload};
//     case 'SET_MAINLOAD':
//       return {...state, ...payload};
//     case 'SET_LISTLOAD':
//       return {...state, ...payload};
//     case 'SET_USER_UID':
//       return {...state, ...payload};
//     case 'SET_RECENT_SEARCH':
//       return {...state, ...payload};

//     default:
//       return {...state};
//   }
// };

export default HomeReducer;
