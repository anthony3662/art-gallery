import React from 'react';

const logoURL = 'https://i.ibb.co/prcfbk1/logo.png';

const wrapperCSS = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'fixed',
  zIndex: 50,
  top: '-2%',
  width: '100%',
  margin: '3% 0 3% 0',
};

const logoCSS = {
  fontFamily: 'HelveticaNeue',
  fontSize: '7vw',
  cursor: 'pointer',
  marginTop: '2vh',
  marginBottom: '2vh',
  marginLeft: '8vw'

};

const iconCSS = {
  // border: 0,
  // backgroundColor: 'transparent',
  // fontFamily: 'Verdana',
  // fontVariant: 'small-caps',
  // fontSize: '8vw',
  width: '14%',
  marginRight: '8vw'
};

const toggleButtonCSS = {
  border: 0,
  backgroundColor: 'transparent',
  fontFamily: 'Verdana',
  // fontVariant: 'small-caps',
  fontSize: '12vw'
};
const selectedCSS = {
  // textDecoration: 'solid underline purple 5px',
  fontWeight: 'bold',
  border: 0,
  backgroundColor: 'transparent',
  fontFamily: 'Verdana',
  // fontVariant: 'small-caps',
  fontSize: '5vw',
  margin: '1vh 1vh'
};

const buttonCSS = {
  // textDecoration: 'solid underline purple 5px',
  border: 0,
  backgroundColor: 'transparent',
  fontFamily: 'Verdana',
  // fontVariant: 'small-caps',
  fontSize: '5vw',
  margin: '1vh 1vh'
};
const menuCSS = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // position: 'fixed',
  zIndex: 20,
  top: '11%',
  alignSelf: 'flex-end',
  marginRight: '7%',
  backgroundColor: '#bbbbbb',
  padding: '2%'

};


class MobileNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this._onClick = this._onClick.bind(this);
    this.logoClick = this.logoClick.bind(this);

    this.state = {
      page: 'Painting',
      expanded: false
    };
  }

  toggleMenu() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  _onClick(event) {
    this.setState({
      page: event.target.textContent,
      expanded: false
    });
    this.props.changePage(event.target.textContent);
  }

  logoClick() {
    this.setState({
      page: 'Painting'
    });
    this.props.changePage('Painting');
  }

  render() {
    return (
      <div style={wrapperCSS}>
        <div id="mobileTopRow">
          <p style={logoCSS} onClick={this.logoClick} >BEN BROCK</p>
          {/* <button style={toggleButtonCSS} onClick={this.toggleMenu} >Menu</button> */}
          <svg style={iconCSS} onClick={this.toggleMenu} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="96px" height="96px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
        </div>

        {this.state.expanded &&
          <div id="mobileNavigation" style={menuCSS}>
            <button style={this.state.page === 'Painting' ? selectedCSS : buttonCSS} onClick={this._onClick} >Painting</button>
            <button style={this.state.page === 'Drawing' ? selectedCSS : buttonCSS} onClick={this._onClick}>Drawing</button>
            <button style={this.state.page === 'Video' ? selectedCSS : buttonCSS} onClick={this._onClick} >Video</button>
            <button style={this.state.page === 'Social' ? selectedCSS : buttonCSS} onClick={this._onClick}>Contact</button>
          </div>
        }
      </div>
    );
  }
}
export default MobileNavigation;