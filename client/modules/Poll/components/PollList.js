import React, { PropTypes } from 'react';

// Import Components
import PollListItem from './PollListItem/PollListItem';

function PollList(props) {
  console.log('at polllist...');

  console.log(props);


  return (
    <ul className="list-group polls-container">
      {
        props.polls.map(poll => {
          return (
            <PollListItem
              poll={poll}
              key={poll._id}
            />
          );
        })
      }
    </ul>
  );
}

PollList.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    })).isRequired,
  })).isRequired,
};

export default PollList;
