import React from 'react';
import Icon from './icon.jsx';
import ExpandedGallery from './ExpandedGallery.jsx';

const isMobile = window.screen.width <= 600;


const wrapperCSS = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
};

const collectionCSS = {
  position: 'relative',
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  alignContent: 'flex-start',
  justifyContent: 'center',
  width: '100%'
  // paddingLeft: isMobile ?  0.05 * window.innerWidth : 0.11 * window.innerWidth,
  // paddingRight: isMobile ? 0.05 * window.innerWidth : 0.11 * window.innerWidth
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
          {(collection === 'Enchiridion' || collection === 'Turtles') &&
            <h3 style={collectionNameCSS}>{collection}</h3>
          }
          <div className="collectionDiv" style={collectionCSS}>
            {icons}
          </div>
        </div>

      );
    }

    var imagesProp = this.props.collections[this.state.expandedCollection] ? JSON.parse(JSON.stringify(this.props.collections[this.state.expandedCollection])) : [];
    var startingProp = this.state.expandedIndex;
    if (this.state.expandedCollection === 'collection0' || this.state.expandedCollection === 'No Recess') {
      imagesProp = this.props.collections.collection0.slice();
      imagesProp.push({url: 'https://i.ibb.co/68hQwgt/cobainrow.png', name: 'No Recess', dimensions: '18 x 44 inches overall'});
      // imagesProp.push({url: 'https://i.ibb.co/d5zhTBQ/factsAll.png', name: 'For the Sake of Accumulating Facts', dimensions: '20 x 72 inches overall'});
      // imagesProp.push({url: 'https://i.ibb.co/3dvtkbh/saniAll.png', name: 'Sanitarribley', dimensions: '20 x 72 inches overall'});
    }
    if (this.state.expandedCollection === 'No Recess') {
      startingProp = imagesProp.length - 1;
    }
    // if (this.state.expandedCollection === 'For the Sake of Accumulating Facts') {
    //   startingProp = imagesProp.length - 2;
    // }
    // if (this.state.expandedCollection === 'Sanitarribley') {
    //   startingProp = imagesProp.length - 1;
    // }
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