import React from 'react';

const cvCSS = {
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-start',
  marginLeft: 0.1 * window.innerWidth
}

const headerCSS = {
  fontFamily: 'Chalkduster'
};

const textCSS = {
  fontFamily: 'Verdana',
  fontVariant: 'small-caps',
  fontWeight: 'lighter',
  margin: 3
};

var CV = function(props) {
  var cvTags = []
  for (var section in props.text) {
    var sectionTags = [];
    sectionTags.push(<h3 style={headerCSS} >{section}</h3>);
    var lines = props.text[section].split('\n');
    for (var i = 0; i < lines.length; i++) {
      sectionTags.push(<p style={textCSS}>{lines[i]}</p>);
    }
    cvTags.push(<div>{sectionTags}</div>);
  }
  return (
    <div style={cvCSS}>
      {cvTags}
    </div>
  );
}
export default CV;