import callApi from '../../util/apiCaller';

// Export Constants
export const UPDATE_CURR_POLL = 'UPDATE_CURR_POLL';
export const ADD_POLLS = 'ADD_POLLS';
export const FETCH_POLLS = 'FETCH_POLLS';

export function addPolls(polls) {
  return {
    type: ADD_POLLS,
    payload: polls,
  };
}

export function fetchPolls() {
  console.log('fetching polls...');

  return (dispatch) => {
    return callApi('polls').then(res => {
      console.log(res);
      dispatch(addPolls(res.polls));
    });
  };
}

export function updateCurrPoll(poll) {
  return {
    type: UPDATE_CURR_POLL,
    payload: poll,
  };
}

export function fetchPoll(id) {
  console.log('fetching a poll...');

  return (dispatch) => {
    return callApi('polls/' + id).then(res => {
      console.log(res);
      dispatch(updateCurrPoll(res));
    });
  };
}