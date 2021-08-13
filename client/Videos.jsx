import React from 'react';

const wrapperCSS = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  position: 'fixed',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center'
};

const videoCSS = {
  marginTop: '5vh',
  marginBottom: '5vh',
  width: window.screen.width <= 550 ? '100vw' : '100vh',
  height: window.screen.width <= 550 ? '42vw' : '42vh',
};


class Videos extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div style={wrapperCSS}>
        {this.props.videos.map(url =>
        <iframe style={videoCSS} src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen" allowfullscreen="allowfullscreen"></iframe>
        )}
        {/* <h2 id="comingSoon">Coming Soon</h2> */}
      </div>
    );
  }
}
export default Videos;