import React from 'react';

const logoURL = 'https://i.ibb.co/prcfbk1/logo.png';

const wrapperCSS = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const logoCSS = {
  fontFamily: 'Helvetica',
  fontSize: '16vw',
  cursor: 'pointer',
  marginTop: '2vh',
  marginBottom: '2vh'
};

const buttonCSS = {
  border: 0,
  backgroundColor: 'transparent',
  fontFamily: 'Verdana',
  // fontVariant: 'small-caps',
  fontSize: '8vw'
};

const toggleButtonCSS = {
  border: 0,
  backgroundColor: 'transparent',
  fontFamily: 'Verdana',
  // fontVariant: 'small-caps',
  fontSize: '12vw'
};
// const selectedCSS = {
//   // textDecoration: 'solid underline purple 5px',
//   fontWeight: 'bold',
//   border: 0,
//   backgroundColor: 'transparent',
//   fontFamily: 'Verdana',
//   // fontVariant: 'small-caps',
//   fontSize: window.screen.width <= 600 ? 100 : 50
// };

const selectedCSS = buttonCSS;

const menuCSS = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
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
        <p style={logoCSS} onClick={this.logoClick} >Ben Brock</p>
        <button style={toggleButtonCSS} onClick={this.toggleMenu} >Menu</button>
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