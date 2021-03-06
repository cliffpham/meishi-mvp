// The reducers.js file is basically the schema of our database

export default reducers = (state = {

    loggedIn: false,
    cards: [],
    user: {
      id: '',
      name: '',
      email: '',
      photoUrl: '',
      friends: '',
      phone: '',
      image: '',
      title: '',
      linkone: '',
      linktwo:'',
      aboutMe:'',
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
      case 'UPDATE_TITLE':      
      return { ...state, user: { ...state.user, title : action.payload } 
    }
      case 'UPDATE_LINKONE':      
      return { ...state, user: { ...state.user, linkone : action.payload }
    }
      case 'UPDATE_IMAGE':      
      return { ...state, user: { ...state.user, image : action.payload }
    }
      case 'UPDATE_PHONE':      
      return { ...state, user: { ...state.user, phone : action.payload }
    }
      case 'UPDATE_ABOUTME':      
      return { ...state, user: { ...state.user, aboutMe : action.payload }
    }
      case 'GET_CARDS':
      return {...state, cards: action.payload}
    }
    
    
  return state;
} 