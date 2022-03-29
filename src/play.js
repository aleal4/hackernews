import React, { Component } from 'react';

class ExplainBind extends Component {
  constructor() {
    super();

    this.onClickMe = this.onClickMe.bind(this);
  }

  onClickMe() {
    console.log(this);
  }

  render() {
    return (
      <button onClick={this.onClickMe} type="button">
        ClickMe
      </button>
    );
  }
}

export default ExplainBind;
