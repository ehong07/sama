import React from 'react';

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      body: e.target.value
    });
  }

  handleClick(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.body}
          style={this.props.style}
          onClick={this.handleClick}
          onChange={this.handleChange}
        />
    </div>
    );
  }
}

export default Box;
