import React from 'react';

const wrapperCSS = {
  display: 'flex',
  justifyContent: 'space-between',
  width: window.innerWidth
};

const menuCSS = {
  display: 'flex',
  flexFlow: 'row wrap',
  alignContent: 'flex-start',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: 0.5 * window.innerWidth,
  paddingLeft: 0.02 * window.innerWidth,
  paddingRight: 0.02 * window.innerWidth,
  paddingTop: 0.03 * window.innerWidth,
  margin: 0,
};

const logoCSS = {
  width: 0.2 * window.innerWidth,
  height: 0.1 * window.innerWidth,
  objectFit: 'cover',
  marginRight: 0.03 * window.innerWidth,
  cursor: 'pointer'
};

const buttonCSS = {
  border: 0,
  backgroundColor: 'transparent',
  fontFamily: 'Verdana',
  fontVariant: 'small-caps',
  fontSize: 24 * window.innerWidth / 1440,
  cursor: 'pointer'
};

const selectedCSS = {
  textDecoration: 'solid underline purple 3px',
  fontWeight: 'bold',
  border: 0,
  backgroundColor: 'transparent',
  fontFamily: 'Verdana',
  fontVariant: 'small-caps',
  fontSize: 28 * window.innerWidth / 1440,
  cursor: 'pointer'
};

const logoURL = 'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/09/tostitos.jpg?resize=640%2C360&ssl=1';

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
        <div id="Menu" style={menuCSS}>
          <button style={this.state.page === 'Paintings' ? selectedCSS : buttonCSS} onClick={this._onClick}>Paintings</button>
          <button style={this.state.page === 'Videos' ? selectedCSS : buttonCSS} onClick={this._onClick}>Videos</button>
          <button style={this.state.page === 'Drawings' ? selectedCSS : buttonCSS} onClick={this._onClick}>Drawings</button>
          <button style={this.state.page === 'CV' ? selectedCSS : buttonCSS} onClick={this._onClick}>CV</button>
        </div>
        <img src={logoURL} style={logoCSS} onClick={this.logoClick} />
      </div>
    );
  }
}
export default Navigation;