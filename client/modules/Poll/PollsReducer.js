import { ADD_POLL, ADD_POLLS } from './PollActions';

const initialState = [];

const PollsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POLLS:
      return action.payload;

    case ADD_POLL:
      return [action.poll, ...state.polls];

    default:
      return state;
  }
};

export default PollsReducer;
