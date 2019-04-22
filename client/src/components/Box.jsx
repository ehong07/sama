import React, { Component } from 'react';

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      body: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.body}
        />
    </div>
    );
  }
}

export default Box;
