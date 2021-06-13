import React from 'react';
const isMobile = window.screen.width <= 600 || window.innerWidth <= 600;
//props.collection, props.index, props.image, props.iconClick(collection, index)


var Icon = function(props) {
  var computerWidth = 0.24 * window.innerWidth;
  var computerHeight = 0.18 * window.innerWidth;
  var marginLeft = 0;
  var marginRight = 0;
  var left = isMobile? 0 : 0.03 * window.innerWidth;
  if (props.image.url ===  "https://i.ibb.co/98kVfzp/20210612-190410.jpg") { //special for cobain
    computerWidth = 0.14 * window.innerWidth;
    marginLeft = 0.03 * window.innerWidth;
    marginRight = 0.03* window.innerWidth;
  }
  if (props.collection === 'For the Sake of Accumulating Facts' || props.collection === 'Sanitarribley') {
    computerWidth = 0.18 * window.innerWidth;
    computerHeight = 0.135 * window.innerWidth;
  }
  if (props.collection === 'No Recess') {
    left += isMobile ? 0 : -0.03 * window.innerWidth;
  }
  if (props.image.url === 'https://i.ibb.co/z2VvQHf/facts2.png' || props.image.url === 'https://i.ibb.co/RCk0nm9/sani2.png') {
    left += isMobile ? 0.07 * window.innerWidth : -0.04 * window.innerWidth;
  }
  if (props.image.url === "https://i.ibb.co/1Tzfmsb/facts3.png" || props.image.url === 'https://i.ibb.co/bmdFYLw/sani3.png') {
    left += isMobile ? 0.1 * window.innerWidth : -0.06 * window.innerWidth;
  }
  var imgCSS = {
    position: 'relative',
    left: left,
    width: isMobile ? 0.40 * window.innerWidth : computerWidth,
    height: isMobile ? 0.30 * window.innerWidth : computerHeight,
    objectFit: 'contain',
    marginTop: 0.01 * window.innerWidth,
    marginBottom: 0.01 * window.innerWidth,
    marginLeft: marginLeft,
    marginRight: marginRight
  };
  return (
    <img style={imgCSS} src={props.image.url} onClick={() => {props.iconClick(props.collection, props.index)}}/>
  );
}
export default Icon;