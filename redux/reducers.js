// The reducers.js file is basically the schema of our database

export default reducers = (state = {
  loggedIn: false,
  cards: [],
  user: {
    id: '',
    name: '',
    email: '',
    photoUrl: '',
    image: '',
    notification: false,
    show: false,
    report: false,
    collection: [],
    token: ' ',
  }
}, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return { ...state, user: action.user, loggedIn: action.loggedIn}
    }
    case 'LOGOUT': {
      return { ...state, loggedIn: action.loggedIn }
    }
    case 'UPDATE_EMAIL':      
      return { ...state, user: { ...state.user, email : action.payload } 
    }
    case 'GET_CARDS':
    return {...state, cards: action.payload}
  }
  return state;
} 