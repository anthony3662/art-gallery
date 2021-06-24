import React from 'react';

const wrapperCSS = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: window.innerWidth
};

const menuCSS = {
  alignSelf: 'flex-start',
  display: 'flex',
  flexFlow: 'row wrap',
  alignContent: 'flex-start',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: 0.4 * window.innerWidth,
  paddingLeft: 0.02 * window.innerWidth,
  paddingRight: 0.02 * window.innerWidth,
  marginBottom: '50px',
};

const logoCSS = {
  fontFamily: 'Helvetica',
  fontSize: 50,
  cursor: 'pointer'
};

const buttonCSS = {
  border: 0,
  backgroundColor: 'transparent',
  fontFamily: 'Verdana',
  // fontVariant: 'small-caps',
  fontSize: 24 * window.innerWidth / 1440,
  cursor: 'pointer'
};

// const selectedCSS = {
//   // textDecoration: 'solid underline purple 3px',
//   fontWeight: 'bold',
//   border: 0,
//   backgroundColor: 'transparent',
//   fontFamily: 'Verdana',
//   // fontVariant: 'small-caps',
//   fontSize: 28 * window.innerWidth / 1440,
//   cursor: 'pointer'
// };
const selectedCSS = buttonCSS;

const logoURL = 'https://i.ibb.co/prcfbk1/logo.png';

//this.props.changePage(page)
class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
    this.logoClick = this.logoClick.bind(this);

    this.state = {
      page: 'Paintings'
    };
  }

  _onClick(event) {
    this.setState({
      page: event.target.textContent
    });
    this.props.changePage(event.target.textContent);
  }

  logoClick() {
    this.setState({
      page: 'Paintings'
    });
    this.props.changePage('Paintings');
  }

  render() {
    return (
      <div id="topPanel" style={wrapperCSS}>
        <p style={logoCSS} onClick={this.logoClick} >Ben Brock</p>
        <div id="Menu" style={menuCSS}>
          <button style={this.state.page === 'Paintings' ? selectedCSS : buttonCSS} onClick={this._onClick}>Paintings</button>
          <button style={this.state.page === 'Drawings' ? selectedCSS : buttonCSS} onClick={this._onClick}>Drawings</button>
          <button style={this.state.page === 'Videos' ? selectedCSS : buttonCSS} onClick={this._onClick}>Videos</button>
          <button style={this.state.page === 'CV' ? selectedCSS : buttonCSS} onClick={this._onClick}>CV</button>
        </div>
      </div>
    );
  }
}
export default Navigation;