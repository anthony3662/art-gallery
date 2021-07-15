import React from 'react';
//this.props.images, this.props.startingIndex, this.props.close
const isMobile = window.screen.width <= 600;

const imageCSS = {
  position: 'relative',
  height: '90%',
  objectFit: 'contain'
};

const closeCSS = {
  position: 'fixed',
  top: '3%',
  left: '95%',
  width: '5%',
  height: '5%'
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
        if ( xDiff > 0 ) {
        /* left swipe */
          this.cycleRight();
        } else {
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

    const descriptionCSS = {
      position: 'relative',
      zIndex: 3,
      fontFamily: 'Verdana',
      textAlign: 'center',
      color: '#444444'
    };
    return (
      <div id="focusDiv">
        <img style={imageCSS} src={this.props.images[this.state.index].url} onClick={this._onClick}/>
        <svg id="expandedGalleryClose" style={closeCSS} onClick={this.props.close} data-name="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><path d="M72 11.77L60.23 0 36 24.23 11.77 0 0 11.77 24.23 36 0 60.23 11.77 72 36 47.77 60.23 72 72 60.23 47.77 36 72 11.77z"/></svg>
        <p style={descriptionCSS}>
          {this.props.images[this.state.index].name + ', ' + this.props.images[this.state.index].dimensions}
        </p>
      </div>
    );
  }
}
export default ExpandedGallery;