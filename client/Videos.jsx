import React from 'react';

const wrapperCSS = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
};

const videoCSS = {
  marginTop: '5vh',
  marginBottom: '5vh',
  width: window.screen.width <= 600 ? '100vw' : '100vh',
  height: window.screen.width <= 600 ? '42vw' : '42vh'
};


class Videos extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div style={wrapperCSS}>
        {this.props.videos.map(url =>
        <iframe style={videoCSS} src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        )}
        {/* <h2 id="comingSoon">Coming Soon</h2> */}
      </div>
    );
  }
}
export default Videos;