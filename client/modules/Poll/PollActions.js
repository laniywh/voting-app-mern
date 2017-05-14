import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_POLL = 'ADD_POLL';
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
