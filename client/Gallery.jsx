import React from 'react';
import Icon from './icon.jsx';

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
  fontFamily: 'Chalkduster'
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var collectionDivs = [];
    for (var collection in this.props.collections) {
      var icons = [];
      for (var i = 0; i < this.props.collections[collection].length; i++) {
        icons.push(<Icon collection={collection} index={i} url={this.props.collections[collection][i]}/>);
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
        {collectionDivs}
      </div>
    );
  }
}
export default Gallery;