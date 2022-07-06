const initialState = {
  ApiData: [],
  Page: 1,
  myText: 'photo',
  text:'',
  mainLoading: false,
  listLoading: false,
  userData: {},
  recentSearch: [],
};

const HomeReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'ADD_DATA':
      return {...state, ...payload};
    case 'PAGE':
      return {...state, ...payload};
    case 'SET_SEARCH_TEXT':
      return {...state, ...payload};
    case 'SET_MAINLOAD':
      return {...state, ...payload};
    case 'SET_LISTLOAD':
      return {...state, ...payload};
    case 'SET_UID':
      return {...state, ...payload};
    case 'SET_RECENT_SEARCH':
      return {...state, ...payload};

    default:
      return {...state};
  }
};

export default HomeReducer;
