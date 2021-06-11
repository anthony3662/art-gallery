import React from 'react';
//this.props.images, this.props.startingIndex, this.props.close

const imageCSS = {
  width: window.innerWidth,
  height: window.innerHeight,
  objectFit: 'contain'
};

const closeCSS = {
  position: 'absolute',
  top: 0,
  left: window.innerWidth - 0.05 * window.innerHeight
}

class ExpandedGallery extends React.Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
    this.cycleLeft = this.cycleLeft.bind(this);
    this.cycleRight = this.cycleRight.bind(this);

    this.state = {
      index: this.props.startingIndex
    };
  }

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
    return (
      <div>
        <img style={imageCSS} src={this.props.images[this.state.index]} onClick={this._onClick}/>
        <svg id="expandedGalleryClose" style={closeCSS} width={window.innerHeight * 0.05} height={window.innerHeight * 0.05} onClick={this.props.close} data-name="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><path d="M72 11.77L60.23 0 36 24.23 11.77 0 0 11.77 24.23 36 0 60.23 11.77 72 36 47.77 60.23 72 72 60.23 47.77 36 72 11.77z"/></svg>

      </div>
    );
  }
}
export default ExpandedGallery;