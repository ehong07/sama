import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/Box.jsx';
import formImage from './images/pdf-image-1.jpeg';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
      count: 0,
      xCoordinate: 0,
      yCoordinate: 0
    };
    this.addBoxOnClick = this.addBoxOnClick.bind(this);
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addBox() {
    this.setState({ count: this.state.count + 1});
  }

  removeBox() {
    this.setState({ count: this.state.count - 1});
  }

  // displayBox() {
  //   const styles = {
  //     height: 25,
  //     width: 100,
  //     backgroundColor: 'powderblue'
  //   };
  //   let forms = [];
  //   for (let i = 0; i < this.state.count; i++) {
  //     forms.push(
  //       <div key={i}>
  //         <Box style={styles}/>
  //       </div>
  //     );
  //   }
  //   return forms || null;
  // }

  displayBoxes() {
    return this.state.boxes || null;
  }

  addBoxOnClick(e) {
    console.log('X: ', e.nativeEvent.offsetX);
    console.log('Y: ', e.nativeEvent.offsetY);
    this.setState({
      xCoordinate: e.nativeEvent.offsetX,
      yCoordinate: e.nativeEvent.offsetY,
      count: this.state.count + 1
    });
    const styles = {
      backgroundColor: 'powderblue',
      position: 'absolute',
      top: this.state.yCoordinate,
      left: this.state.xCoordinate,
      zIndex: 1
    };
    let boxesCopy = this.state.boxes;
    boxesCopy.push(
      <div key={this.state.count}>
        <Box style={styles} />
      </div>
    );
    this.setState({
      boxes: boxesCopy
    });
  }

  render() {
    const styles = {
      height: '100%',
      width: '100%',
      zIndex: 0
    };
    return (
      <div onClick={this.addBoxOnClick}>
        {this.displayBoxes()}
        <img src={formImage} style={styles} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
