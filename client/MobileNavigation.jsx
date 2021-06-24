import React from 'react';

const logoURL = 'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/09/tostitos.jpg?resize=640%2C360&ssl=1';

const wrapperCSS = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const logoCSS = {
  width: window.innerWidth * 0.5,
  height: window.innerWidth * 0.25,
  objectFit: 'cover'
};

const buttonCSS = {
  border: 0,
  backgroundColor: 'transparent',
  fontFamily: 'Verdana',
  // fontVariant: 'small-caps',
  fontSize: window.screen.width <= 600 ? 100 : 50,
};

const selectedCSS = {
  // textDecoration: 'solid underline purple 5px',
  fontWeight: 'bold',
  border: 0,
  backgroundColor: 'transparent',
  fontFamily: 'Verdana',
  // fontVariant: 'small-caps',
  fontSize: window.screen.width <= 600 ? 100 : 50
};

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
      page: 'Paintings',
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
      page: 'Paintings'
    });
    this.props.changePage('Paintings');
  }

  render() {
    return (
      <div style={wrapperCSS}>
        <button style={buttonCSS} onClick={this.toggleMenu} >Menu</button>
        {this.state.expanded &&
          <div id="mobileNavigation" style={menuCSS}>
            <button style={this.state.page === 'Paintings' ? selectedCSS : buttonCSS} onClick={this._onClick} >Paintings</button>
            <button style={this.state.page === 'Drawings' ? selectedCSS : buttonCSS} onClick={this._onClick}>Drawings</button>
            <button style={this.state.page === 'Videos' ? selectedCSS : buttonCSS} onClick={this._onClick} >Videos</button>
            <button style={this.state.page === 'CV' ? selectedCSS : buttonCSS} onClick={this._onClick}>CV</button>
          </div>
        }
        <img src={logoURL} style={logoCSS} onClick={this.logoClick} />
      </div>
    );
  }
}
export default MobileNavigation;