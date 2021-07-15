import React from 'react';

const wrapperCSS = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const videoCSS = {
  marginTop: 0.05 * window.innerHeight,
  marginBottom: 0.05 * window.innerHeight,
};

const WIDTH = window.innerWidth < 640 ? window.innerWidth : 640;
const HEIGHT = ( 9 / 16 * WIDTH) < 360 ? (9 / 16 * WIDTH) : 360;
class Videos extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div style={wrapperCSS}>
        {/* {this.props.videos.map(url =>
          <iframe src={url} width={WIDTH} height={HEIGHT} style={videoCSS} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        )} */}
        <h2 id="comingSoon">Coming Soon</h2>
      </div>
    );
  }
}
export default Videos;