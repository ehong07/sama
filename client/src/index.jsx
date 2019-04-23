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
      yCoordinate: 0,
      boxConfigs: []
    };
    this.addBoxOnClick = this.addBoxOnClick.bind(this);
    this.removeBox = this.removeBox.bind(this);
    this.saveConfig = this.saveConfig.bind(this);
  }

  removeBox() {
    const boxesCopy = this.state.boxes.slice(0, this.state.boxes.length - 1);
    this.setState({ boxes: boxesCopy});
  }

  displayBoxes() {
    return this.state.boxes || null;
  }

  async addBoxOnClick(e) {
    await this.setState({
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

  async saveConfig() {
    try {
      const resp = await axios.post('/save-form', boxConfigs);
      console.log(resp);
    } catch (e) {
      console.log('SAVE ERR: ', e);
    }
  }

  async getConfig() {
    try {
      const resp = await axios.get('/get-form', {
        params: {}
      });
      console.log(resp);
    } catch (e) {
      console.log('FETCH ERR: ', e);
    }
  }

  render() {
    const styles = {
      height: '100%',
      width: '100%',
      zIndex: 0
    };
    return (
      <div>
        <div onClick={this.addBoxOnClick}>
          {this.displayBoxes()}
          <img src={formImage} style={styles} />
        </div>
        <input type='button' value='REMOVE BOX' onClick={this.removeBox}/>
        <input type='button' value='SAVE CONFIG' />
        <input type='button' value='GET CONFIG' onClick={this.getConfig}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
