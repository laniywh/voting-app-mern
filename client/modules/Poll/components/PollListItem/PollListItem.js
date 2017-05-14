import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function PollListItem(props) {
  return (
    <li className="list-group-item poll">
      <Link to="/">{props.poll.name}</Link>
    </li>
  );
}

PollListItem.propTypes = {
  poll: PropTypes.shape({
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayof(PropTypes.shape({
      name: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};


export default PollListItem;
