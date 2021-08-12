import React from 'react';

const cvCSS = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-start',
  alignItems: window.screen.width <= 550 ? 'center' : 'flex-start',
  marginLeft: window.screen.width <= 550 ? 0 : '10%',
  width: '100%',
  top: window.screen.width <= 550 ? '10vh' : 0
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
  // var cvTags = []
  // for (var section in props.text) {
  //   var sectionTags = [];
  //   sectionTags.push(<h3 style={headerCSS} >{section}</h3>);
  //   var lines = props.text[section].split('\n');
  //   for (var i = 0; i < lines.length; i++) {
  //     sectionTags.push(<p style={textCSS}>{lines[i]}</p>);
  //   }
  //   cvTags.push(<div>{sectionTags}</div>);
  // }
  //https://i.ibb.co/gmM0LCh/Screen-Shot-2021-07-27-at-7-46-33-PM.png
  return (
    <div style={cvCSS}>
      {/* {cvTags} */}
      {/* <h2 id="comingSoon">Coming Soon</h2> */}
      <a href="https://instagram.com/benbrockart/" style={{marginLeft: window.screen.width <=550 ? '19%' : '-0.5%'}}>
        <img style={{width: window.screen.width <= 600 ? '75%': '20%', marginBottom: '3vh', marginTop: window.screen.width <= 600 ? '5vh' : 0}} src="https://i.ibb.co/JFDGyb8/ig-Logo-Color-Corrected.jpg"></img>
      </a>
      <div className="contactRow" style={{fontSize: window.screen.width <= 550 ? '5vw' : '1.3vw'}}>
        <h4 className="contactLabel"></h4>
        <a style={{fontFamily: 'Verdana', color: '#333333'}} href="mailto:benbrockart@gmail.com">benbrockart@gmail.com</a>
      </div>
    </div>
  );
}
export default CV;