const initialState = false;

const appReadyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_APP_READY': {
      return action.appReady;
    }
    default:
      return state;
  }
};

export default appReadyReducer;
