const initialState = '';

const fingerprintReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FINGERPRINT': {
      return action.fingerprint;
    }
    default:
      return state;
  }
};

export default fingerprintReducer;
