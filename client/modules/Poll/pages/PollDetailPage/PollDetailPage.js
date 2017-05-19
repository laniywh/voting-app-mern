import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import PollVote from '../../components/PollVote/PollVote';
import Piechart from '../../components/Piechart/Piechart';

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
        console.log(poll);

        return (
            <div className="poll-container">
              <h2>{ poll.name }</h2>
              <div className="row">
                <div className="col-md-6 options">
                    <PollVote poll={ poll } />
                </div>

                <div className="col-md-6 graph">
                    <svg width="600" height="600">
                        <Piechart x={200} y={200} outerRadius={200} innerRadius={100}
                                  data={poll.options} />
                    </svg>
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