import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import PollList from '../../components/PollList';

// Import Actions
import { fetchPolls } from '../../PollActions';

class PollListPage extends Component {
  componentDidMount() {
    this.props.fetchPolls();
  }

  render() {
    return (
      <PollList polls={this.props.polls} />
    );
  }
}

function mapStateToProps(state) {
  return {
    polls: state.polls,
  };
}

PollListPage.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    })).isRequired,
  })).isRequired,
  fetchPolls: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchPolls })(PollListPage);
