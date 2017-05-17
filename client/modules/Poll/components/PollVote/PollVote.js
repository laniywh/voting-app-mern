import React from 'react';

export default function PollVote(props) {
    const { poll } = props;

    return (
      <form action="/api/poll/vote" method="POST">
        {
          poll.options.map((option, i) => {
              return (
                  <div key={ i }>
                      <input type="radio"
                         name="option"
                         value="{ poll.options[i].name }" />
                      <span>{ poll.options[i].name }</span>
                      <br />
                  </div>
              );
          })
        }
        <input className="btn" type="submit" value="Submit" />
      </form>
    );
}