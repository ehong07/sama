import React from 'react';
// Saves on render counts
class Box extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.saveBoxConfig = this.saveBoxConfig.bind(this);
  }

  handleChange(e) {
    this.setState({
      body: e.target.value
    });
  }

  handleClick(e) {
    e.stopPropagation();
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      console.log('ENTER PRESSED');
      this.props.updateBoxVal(this.state.body);
    }
  }

  saveBoxConfig() {
    this.props.saveBox(this.state.body);
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
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default Box;
