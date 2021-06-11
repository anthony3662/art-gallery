import React from 'react';

const logoURL = 'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349142540-3M3CF52BRESZIX334XQE/ke17ZwdGBToddI8pDm48kPpAxxAMkdWLvZ8KPwskBm17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p5uBJOnOmCWBN4JfYsIDyS6K0NYX-Vp73rpruyycpr9CU5uQp4nuBxKgx0JQoevkw/Horn-loudspeaker-birds+soaked.jpg?format=750w';

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
  fontFamily: 'Chalkduster',
  fontVariant: 'small-caps',
  fontSize: 50,
};

const selectedCSS = {
  textDecoration: 'solid underline purple 5px',
  fontWeight: 'bold',
  border: 0,
  backgroundColor: 'transparent',
  fontFamily: 'Chalkduster',
  fontVariant: 'small-caps',
  fontSize: 60
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
            <button style={this.state.page === 'Videos' ? selectedCSS : buttonCSS} onClick={this._onClick} >Videos</button>
            <button style={this.state.page === 'Drawings' ? selectedCSS : buttonCSS} onClick={this._onClick}>Drawings</button>
            <button style={this.state.page === 'CV' ? selectedCSS : buttonCSS} onClick={this._onClick}>CV</button>
          </div>
        }
        <img src={logoURL} style={logoCSS} onClick={this.logoClick} />
      </div>
    );
  }
}
export default MobileNavigation;