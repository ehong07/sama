import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/Box.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      count: 0
    };
    this.getCoordinatesOnClick = this.getCoordinatesOnClick.bind(this);
  }

  addBox() {
    this.setState({ count: this.state.count + 1});
  }

  removeBox() {
    this.setState({ count: this.state.count - 1});
  }

  displayBox() {
    let forms = [];
    for (let i = 0; i < this.state.count; i++) {
      forms.push(
        <div key={i}>
          <Box />
        </div>
      );
    }
    return forms || null;
  }

  getCoordinatesOnClick(e) {
    console.log('X: ', e.nativeEvent.offsetX);
    console.log('Y: ', e.nativeEvent.offSetY);
  }

  render() {
    return (
      <form>
        {this.displayBox()}
        <input type='button' value='add more' onClick={this.addBox.bind(this)}/>
        <input type='button' value='remove' onClick={this.removeBox.bind(this)}/>
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
