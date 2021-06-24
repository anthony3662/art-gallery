import React from 'react';
//this.props.images, this.props.startingIndex, this.props.close
const isMobile = window.screen.width <= 600 || window.innerWidth <= 600;

const imageCSS = {
  width: window.innerWidth,
  height: isMobile ? 0.9 * window.innerHeight : 0.98 * window.innerHeight ,
  objectFit: 'contain'
};

const closeCSS = {
  position: 'absolute',
  top: 5,
  left: window.innerWidth - 0.05 * window.innerHeight
};


const mobileDescriptionCSS = {
  fontFamily: 'Chalkduster',
  textAlign: 'center'
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
          this.cycleLeft();
        } else {
        /* right swipe */
          this.cycleRight();
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

    var left = 0.885 * window.innerWidth;
    if (this.props.images[this.state.index].name === 'No Recess' || this.props.images[this.state.index].name === 'For the Sake of Accumulating Facts' || this.props.images[this.state.index].name === 'Sanitarribley') {
      left = 0.17 * window.innerWidth;
    }
    const descriptionCSS = {
      position: 'absolute',
      zIndex: 3,
      left: left,
      top: 0.75 * window.innerHeight,
      fontFamily: 'Verdana',
      textAlign: isMobile ? 'center' : 'left'
    };
    return (
      <div>
        <img style={imageCSS} src={this.props.images[this.state.index].url} onClick={this._onClick}/>
        <svg id="expandedGalleryClose" style={closeCSS} width={window.innerHeight * 0.05} height={window.innerHeight * 0.05} onClick={this.props.close} data-name="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><path d="M72 11.77L60.23 0 36 24.23 11.77 0 0 11.77 24.23 36 0 60.23 11.77 72 36 47.77 60.23 72 72 60.23 47.77 36 72 11.77z"/></svg>
      <p style={isMobile ? mobileDescriptionCSS : descriptionCSS}>
        {this.props.images[this.state.index].name}
        &nbsp;

        {!isMobile &&
          <br/>
        }
        {!isMobile &&
          <br/>
        }
        acrylic on canvas, 2020
        &nbsp;
        {!isMobile &&
          <br/>
        }
        {!isMobile &&
          <br/>
        }

        {this.props.images[this.state.index].dimensions}
      </p>
      </div>
    );
  }
}
export default ExpandedGallery;