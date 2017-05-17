import { UPDATE_CURR_POLL, ADD_POLLS } from './PollActions';

const initialState = {
    data: [],
    currPoll: {
        name: '',
        options: [],
    }
};

const PollsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POLLS:
      return { ...state, data: action.payload };

    case UPDATE_CURR_POLL:
      return { ...state, currPoll: action.payload };

    default:
      return state;
  }
};

export default PollsReducer;
