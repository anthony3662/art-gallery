import React from 'react';
import Icon from './icon.jsx';
import ExpandedGallery from './ExpandedGallery.jsx';

const wrapperCSS = {
  display: 'flex',
  flexDirection: 'column',
};

const collectionCSS = {
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  alignContent: 'flex-start',
  justifyContent: 'space-between',
  paddingLeft: 0.11 * window.innerWidth,
  paddingRight: 0.11 * window.innerWidth
};

const collectionNameCSS = {
  marginLeft: 0.1 * window.innerWidth,
  fontFamily: 'Chalkduster',
  fontSize: window.screen.width <= 600 ? 80 : 25
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
        icons.push(<Icon collection={collection} index={i} url={this.props.collections[collection][i]} iconClick={this.iconClick}/>);
      }
      collectionDivs.push(
        <div>
          <h3 style={collectionNameCSS}>{collection}</h3>
          <div className="collectionDiv" style={collectionCSS}>
            {icons}
          </div>
        </div>

      );
    }
    return (
      <div style={wrapperCSS}>
        {!this.state.expandedCollection &&
          collectionDivs
        }
        {this.state.expandedCollection &&
          <ExpandedGallery images={this.props.collections[this.state.expandedCollection]} startingIndex={this.state.expandedIndex} close={this.closeGallery} />
        }
      </div>
    );
  }
}
export default Gallery;