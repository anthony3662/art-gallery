import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const isMobile = window.innerWidth <= 600;

import Navigation from './Navigation.jsx';
import MobileNavigation from './MobileNavigation.jsx';
import Gallery from './Gallery.jsx';
import Videos from './Videos.jsx';

const bodyCSS = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.loadPaintings = this.loadPaintings.bind(this);
    this.loadDrawings = this.loadDrawings.bind(this);
    this.loadVideos = this.loadVideos.bind(this);
    this.changePage = this.changePage.bind(this);

    this.state = {
      page: 'Paintings',
      dataReceived: false,

      paintings: {},
      drawings: {},
      videos: []
    };
  }

  componentDidMount() {
    var promises = [];
    promises.push(this.loadPaintings());
    promises.push(this.loadDrawings());
    promises.push(this.loadVideos());
    Promise.all(promises)
      .then(() => {
        this.setState({
          dataReceived: true
        });
      })
      .catch((err) => {
        console.log('something failed to load');
      });
  }

  loadPaintings() {
    return axios.get('/paintings')
      .then((response) => {
        console.log('Paintings', response.data);
        this.setState({
          paintings: response.data
        });
      })
      .catch((err) => {
        console.log('paintings failed to load', err);
      });
  }

  loadDrawings() {
    return axios.get('/drawings')
      .then((response) => {
        console.log('Drawings', response.data);
        this.setState({
          drawings: response.data
        });
      })
      .catch((err) => {
        console.log('drawings failed to load', err);
      });
  }

  loadVideos() {
    return axios.get('/videos')
    .then((response) => {
      console.log('Videos', response.data);
      this.setState({
        videos: response.data
      });
    })
    .catch((err) => {
      console.log('videos failed to load', err);
    });
  }

  changePage(page) {
    this.setState({
      page: page
    });
  }

  render() {
    return (
      <div style={bodyCSS}>
        {!isMobile &&
          <Navigation changePage={this.changePage}/>
        }
        {this.state.dataReceived && this.state.page === 'Paintings' &&
          <Gallery collections={this.state.paintings}/>
        }
        {this.state.dataReceived && this.state.page === 'Drawings' &&
          <Gallery collections={this.state.drawings} />
        }
        {this.state.dataReceived && this.state.page === 'Videos' &&
          <Videos videos={this.state.videos}/>
        }
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));