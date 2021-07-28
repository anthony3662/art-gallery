import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const isMobile = window.screen.width <= 600;

import Navigation from './Navigation.jsx';
import MobileNavigation from './MobileNavigation.jsx';
import Gallery from './Gallery.jsx';
import Videos from './Videos.jsx';
import CV from './CV.jsx';

const bodyCSS = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.loadPaintings = this.loadPaintings.bind(this);
    this.loadDrawings = this.loadDrawings.bind(this);
    this.loadVideos = this.loadVideos.bind(this);
    this.loadCV = this.loadCV.bind(this);
    this.changePage = this.changePage.bind(this);
    this.expandGallery = this.expandGallery.bind(this);
    this.closeGallery = this.closeGallery.bind(this);

    this.state = {
      page: 'Paintings',
      dataReceived: false,
      expanded: false,

      paintings: {},
      drawings: {},
      videos: [],
      cv: ''
    };
  }

  componentDidMount() {
    var promises = [];
    promises.push(this.loadPaintings());
    promises.push(this.loadDrawings());
    promises.push(this.loadVideos());
    promises.push(this.loadCV())
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

  loadCV() {
    return axios.get('/cv')
    .then((response) => {
      console.log('CV', response.data);
      this.setState({
        cv: response.data
      });
    })
    .catch((err) => {
      console.log('cv failed to load', err);
    });
  }

  changePage(page) {
    this.setState({
      page: page
    });
  }

  expandGallery() {
    this.setState({
      expanded: true
    });
  }

  closeGallery() {
    this.setState({
      expanded: false
    });
  }

  render() {
    return (
      <div style={bodyCSS}>
        {!this.state.expanded &&
          <Navigation changePage={this.changePage}/>
        }
        {/* {isMobile && !this.state.expanded &&
          <MobileNavigation changePage={this.changePage}/>
        } */}
        {this.state.dataReceived && this.state.page === 'Paintings' &&
          <Gallery collections={this.state.paintings} expandGallery={this.expandGallery} closeGallery={this.closeGallery} />
        }
        {this.state.dataReceived && this.state.page === 'Drawings' &&
          <Gallery collections={this.state.drawings} expandGallery={this.expandGallery} closeGallery={this.closeGallery} />
        }
        {this.state.dataReceived && this.state.page === 'Video' &&
          <Videos videos={this.state.videos}/>
        }
        {this.state.dataReceived && this.state.page === 'Contact' &&
          <CV text={this.state.cv}/>
        }
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));