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

export const SET_RECENT_SEARCH='SET_RECENT_SEARCH';

const HomeReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'ADD_DATA':
      return {...state, ...payload};
    case 'INCREASE_PAGE':
      return {...state, ...payload};
    case 'SET_SEARCH_TEXT':
      return {...state, ...payload};
    case 'SET_MAINLOAD':
      return {...state, ...payload};
    case 'SET_LISTLOAD':
      return {...state, ...payload};
    case 'SET_USER_UID':
      return {...state, ...payload};
    case 'SET_RECENT_SEARCH':
      return {...state, ...payload};

    default:
      return {...state};
  }
};

export default HomeReducer;
