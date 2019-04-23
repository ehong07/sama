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
      boxConfigs: [],
      boxValue: ''
    };
    this.addBoxOnClick = this.addBoxOnClick.bind(this);
    this.removeBox = this.removeBox.bind(this);
    this.saveBox = this.saveBox.bind(this);
    this.updateBoxValue = this.updateBoxValue.bind(this);
    this.saveConfig = this.saveConfig.bind(this);
  }

  updateBoxValue(val) {
    this.setState({
      boxValue: val
    });
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
        <Box style={styles} updateBoxVal={this.updateBoxValue} />
      </div>
    );
    this.setState({
      boxes: boxesCopy
    });
  }

  async saveConfig() {
    const config = this.state.boxConfigs;
    try {
      const resp = await axios.post('/save-form', config);
      console.log(resp);
    } catch (e) {
      console.log('SAVE ERR: ', e);
    }
  }

  // TODO!!!
  // params (_id || nickname) will be grabbed client side + inputed to function
  async getConfig() {
    try {
      const resp = await axios.get('/get-form', {
        params: {}
      });
      console.log(resp.data);
    } catch (e) {
      console.log('FETCH ERR: ', e);
    }
  }

  saveBox(boxValue) {
    let boxConfigCopy = this.state.boxConfigs;
    boxConfigCopy.push({
      xCoordinate: this.state.xCoordinate,
      yCoordinate: this.state.yCoordinate,
      value: this.state.boxValue
    });
    this.setState({
      boxConfigs: boxConfigCopy
    });
    console.log(this.state.boxConfigs);
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
        <input type='button' value='SAVE BOX' onClick={this.saveBox}/>
        <input type='button' value='SAVE CONFIG' onClick={this.saveConfig}/>
        <input type='button' value='GET CONFIG' onClick={this.getConfig}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
