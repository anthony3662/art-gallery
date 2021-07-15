import React from 'react';

const cvCSS = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-start',
  // marginLeft: '10%'
  width: '100%',
};

const headerCSS = {
  fontFamily: 'Helvetica',
  fontWeight: '600'
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
      {/* {cvTags} */}
      <h2 id="comingSoon">Coming Soon</h2>
    </div>
  );
}
export default CV;