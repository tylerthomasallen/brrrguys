import { RECEIVE_LOADING } from '../../actions';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case RECEIVE_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;