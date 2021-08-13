import React from 'react';
//this.props.images, this.props.startingIndex, this.props.close
const isMobile = window.screen.width <= 550;

const imageCSS = {
  position: 'relative',
  height: '92%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 0,
  // objectFit: 'contain'
};

const closeCSS = {
  position: 'fixed',
  top: '0%',
  // left: isMobile ? '91%' : '95%',
  // width: isMobile ? '9%' : '5%',
  // height: isMobile ? '9%' :'5%',
  left: '95%',
  width: '5%',
  height: '5%',
  cursor: 'pointer'
};

const leftCSS = {
  position: 'fixed',
  width: '5%',
  height: '5%',
  top: isMobile ? '47.5%' : '43.5%', //centers on image w/ height 92%, 92/2 - 2.5
  left: '5%',
  transform: 'rotate(180deg)',
  cursor: 'pointer',
  userSelect: 'none'
};

const rightCSS = {
  position: 'fixed',
  width: '5%',
  height: '5%',
  top: isMobile ? '47.5%' :'43.5%',
  left: '90%',
  cursor: 'pointer',
  userSelect: 'none'
};

class ExpandedGallery extends React.Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
    this.cycleLeft = this.cycleLeft.bind(this);
    this.cycleRight = this.cycleRight.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);

    this.state = {
      index: this.props.startingIndex
    };
  }

  componentDidMount() {
    document.addEventListener('touchstart', this.handleTouchStart, false);
    document.addEventListener('touchmove', this.handleTouchMove, false);
    this.xDown = null;
    this.yDown = null;
  }

  handleTouchStart(evt) {
    this.xDown = evt.touches[0].clientX;
    this.yDown = evt.touches[0].clientY;
  };

  handleTouchMove(evt) {
    if ( ! this.xDown || ! this.yDown ) {
        return;
    }
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = this.xDown - xUp;
    var yDiff = this.yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 20 ) {
        /* left swipe */
          this.cycleRight();
        } else if (xDiff < -20) {
        /* right swipe */
          this.cycleLeft();
        }
    } else {
        if ( yDiff > 0 ) {
        /* up swipe */
        } else {
        /* down swipe */
        }
    }
    /* reset values */
    this.xDown = null;
    this.yDown = null;
  };

  _onClick(e) {
    if (isMobile) return;
    if (e.clientX < window.innerWidth * 0.5) {
      this.cycleLeft();
    } else {
      this.cycleRight();
    }
  }

  cycleLeft() {
    var newIndex = this.state.index - 1;
    if (newIndex < 0) {
      newIndex = this.props.images.length - 1;
    }
    this.setState({
      index: newIndex
    });
  }

  cycleRight() {
    var newIndex = this.state.index + 1;
    newIndex %= this.props.images.length;
    this.setState({
      index: newIndex
    });
  }

  render() {

    var descriptionCSS = {
      position: 'relative',
      zIndex: 3,
      fontFamily: 'Verdana',
      textAlign: window.screen.width < window.screen.height ? 'left' : 'center',
      margin: window.screen.width < window.screen.height ? '2% 0 0 2%' : '1% 0 3% 0',
      color: '#777777'
    };
    if (isMobile) {
      descriptionCSS.fontSize = '2.6vw';
    }
    return (
      <div id="focusDiv">
        <figure style={imageCSS}>
          <img style={{objectFit: 'contain', maxWidth: '100%', maxHeight: '100%'}} src={this.props.images[this.state.index].url} onClick={this._onClick}/>
          <figcaption style={descriptionCSS}>
            {this.props.images[this.state.index].name + ', ' + this.props.images[this.state.index].dimensions + '.'}
          </figcaption>
        </figure>
        {/* <svg id="expandedGalleryClose" style={closeCSS} onClick={this.props.close} data-name="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><path d="M72 11.77L60.23 0 36 24.23 11.77 0 0 11.77 24.23 36 0 60.23 11.77 72 36 47.77 60.23 72 72 60.23 47.77 36 72 11.77z"/></svg> */}
        <svg id="expandedGalleryClose" style={closeCSS} onClick={this.props.close} data-name="close" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512.02 512.02">
            <path fill="#CCCCCC" d="M468.214,512.02c-11.208,0-22.408-4.28-30.96-12.832L12.838,74.756
              c-17.104-17.104-17.104-44.84,0-61.928c17.104-17.104,44.816-17.104,61.928,0L499.182,437.26c17.104,17.104,17.104,44.84,0,61.928
              C490.622,507.74,479.414,512.02,468.214,512.02z"/>
            <path fill="#CCCCCC" d="M43.798,512.02c-11.208,0-22.408-4.28-30.96-12.832c-17.104-17.088-17.104-44.816,0-61.928
              L437.254,12.836c17.104-17.104,44.816-17.104,61.928,0c17.104,17.088,17.104,44.816,0,61.928L74.758,499.188
              C66.206,507.74,55.006,512.02,43.798,512.02z"/>
        </svg>
        <svg style={rightCSS} onClick={this.cycleRight} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 492.004 492.004">
          <path fill="#CCCCCC" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
            c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
            c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
            c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
        </svg>
        <svg style={leftCSS} onClick={this.cycleLeft} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 492.004 492.004">
          <path fill="#CCCCCC" d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
            c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
            c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
            c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
        </svg>

        {/* <p style={descriptionCSS}>
        </p> */}
      </div>
    );
  }
}
export default ExpandedGallery;