import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import PollVote from '../../components/PollVote/PollVote';
// import PollGraph from '../../components/PollGraph/PollGraph';

// Import Actions
import { fetchPoll } from '../../PollActions';



class PollDetailPage extends Component {
    componentDidMount() {
        this.props.fetchPoll(this.props.params.id);
    }

    findPoll(poll, id) {
        return poll._id === id;
    }

    render() {
        const poll = this.props.currPoll;

        return (
            <div className="poll-container">
              <h2>{ poll.name }</h2>
              <div className="row">
                <div className="col-md-6 options">
                    <PollVote poll={ poll } />
                </div>

                <div className="col-md-6 graph">
                </div>
              </div>
            </div>
        );
    }
}

// PollDetailPage.need =[params => {
//     return fetchPoll(params.id);
// }]


function mapStateToProps(state) {
    return {
        currPoll: state.polls.currPoll,
    }
}

export default connect(mapStateToProps, { fetchPoll })(PollDetailPage);