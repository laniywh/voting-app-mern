import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import PollVote from '../../components/PollVote/PollVote';
import PollGraph from '../../components/PollGraph/PollGraph';


class PollDetailPage extends Component {
    findPoll(poll, id) {
        return poll._id === id;
    }

    render() {
        const { polls } = this.props;
        const pollId = this.props.params.id;

        const poll = polls.find(function (poll) {
            return poll._id === pollId;
        });

        return (
            <div className="poll-container">
              <h2>{ poll.name }</h2>
              <div className="row">
                <div className="col-md-6 options">
                    <PollVote poll={ poll } />
                </div>

                <div className="col-md-6 graph">
                    <PollGraph poll={ poll } />
                </div>
              </div>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        polls: state.polls,
    }
}

export default connect(mapStateToProps)(PollDetailPage);