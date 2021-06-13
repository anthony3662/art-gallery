import React from 'react';
import Icon from './icon.jsx';
import ExpandedGallery from './ExpandedGallery.jsx';

const isMobile = window.screen.width <= 600 || window.innerWidth <= 600;


const wrapperCSS = {
  display: 'flex',
  flexDirection: 'column',
};

const collectionCSS = {
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  alignContent: 'flex-start',
  justifyContent: 'center',
  paddingLeft: isMobile ?  0.05 * window.innerWidth : 0.11 * window.innerWidth,
  paddingRight: isMobile ? 0.05 * window.innerWidth : 0.11 * window.innerWidth
};

const collectionNameCSS = {
  marginLeft: 0.1 * window.innerWidth,
  fontFamily: 'Helvetica',
  fontWeight: '100',
  fontSize: window.screen.width <= 600 ? 60 : 25
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.iconClick = this.iconClick.bind(this);
    this.closeGallery = this.closeGallery.bind(this);

    this.state = {
      expandedCollection: undefined,
      expandedIndex: 0
    };
  }

  iconClick(collection, index) {
    this.setState({
      expandedCollection: collection,
      expandedIndex: index
    });
    this.props.expandGallery();
  }

  closeGallery() {
    this.setState({
      expandedCollection: undefined
    });
    this.props.closeGallery();
  }

  render() {
    var collectionDivs = [];
    for (var collection in this.props.collections) {
      var icons = [];
      for (var i = 0; i < this.props.collections[collection].length; i++) {
        icons.push(<Icon collection={collection} index={i} image={this.props.collections[collection][i]} iconClick={this.iconClick}/>);
      }
      collectionDivs.push(
        <div>
          {/* <h3 style={collectionNameCSS}>{collection}</h3> */}
          <div className="collectionDiv" style={collectionCSS}>
            {icons}
          </div>
        </div>

      );
    }

    var imagesProp = this.props.collections[this.state.expandedCollection];
    var startingProp = this.state.expandedIndex;
    if (this.state.expandedCollection === 'No Recess') {
      imagesProp = [{url: 'https://i.ibb.co/68hQwgt/cobainrow.png', name: 'No Recess', dimensions: '44 x 18 inches overall'}];
      startingProp = 0;
    }
    if (this.state.expandedCollection === 'For the Sake of Accumulating Facts') {
      imagesProp = [{url: 'https://i.ibb.co/d5zhTBQ/factsAll.png', name: 'For the Sake of Accumulating Facts', dimensions: '72 x 20 inches overall'}];
      startingProp = 0;
    }
    if (this.state.expandedCollection === 'Sanitarribley') {
      imagesProp = [{url: 'https://i.ibb.co/3dvtkbh/saniAll.png', name: 'Sanitarribley', dimensions: '72 x 20 inches overall'}];
      startingProp = 0;
    }
    return (
      <div style={wrapperCSS}>
        {!this.state.expandedCollection &&
          collectionDivs
        }
        {this.state.expandedCollection &&
          <ExpandedGallery images={imagesProp} startingIndex={startingProp} close={this.closeGallery} />
        }
      </div>
    );
  }
}
export default Gallery;