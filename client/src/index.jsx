import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import data from '../../db/sampleData';
import Creator from './components/Creator.js'
import Title from './components/Title.js';
import MainImage from './components/MainImage.js';
import Footer from './components/Footer.js';
import Stats from './components/Stats.js';
/***********************************************************************/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data[0], /* data[0] --- default case */
    }
  }

  componentDidMount() {
    const context = this;
    console.log('component did mount');
    axios.get(`http://127.0.0.1:3001/api/${this.props.projectId}`)
      .then((response) => {
        console.log(response.data)
        context.setState({
          data: response.data[0]
        });
      })
      .catch((error) => {
        console.log('ERROR: could not fetch project:', error);
      });
  }



  render() {
    console.log(this.state.data)
    const style = {
      display: "grid",
      gridTemplateColumns: "180px 200px 620px 235px 235px 180px",
      gridTemplateRows: "54px 130px 36px 450px 60px auto",
      justifyContent: "stretch",
      lineHeight: "21px",
      fontSize: "14px",
      fontWeight: "400",
      fontFamily: "Karla, Helvetica Neue, Helvetica, Arial, sans-serif",
      backgroundColor: "#FBFBFA",
      color: "rgb(40, 40, 40)",
      gridAutoFlow: 'row',
      gridAutoFlow: 'column',
    }

    return (
      <div className="App" style={style}>
        <Creator data={this.state.data}/>
        <Title data={this.state.data}/>
        <MainImage data={this.state.data}/>
        <Footer data={this.state.data}/>
        <Stats data={this.state.data}/>
      </div>
    )
  }

}

window.React = React;
window.ReactDOM = ReactDOM;
window.App = App;

// ReactDOM.render(<App />, document.getElementById('Summary'));
