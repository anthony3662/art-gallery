import React from 'react';
const isMobile = window.screen.width <= 600 || window.innerWidth <= 600;
//props.collection, props.index, props.url, props.iconClick(collection, index)

const imgCSS = {
  width: isMobile ? 0.40 * window.innerWidth : 0.24 * window.innerWidth,
  height: isMobile ? 0.30 * window.innerWidth : 0.18 * window.innerWidth,
  objectFit: 'contain',
  marginTop: 0.01 * window.innerWidth,
  marginBottom: 0.01 * window.innerWidth
};

var Icon = function(props) {
  return (
    <img style={imgCSS} src={props.url} onClick={() => {props.iconClick(props.collection, props.index)}}/>
  );
}
export default Icon;