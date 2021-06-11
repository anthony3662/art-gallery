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
  marginRight: 0.03 * window.innerWidth,
  cursor: 'pointer'
};

const buttonCSS = {
  border: 0,
  backgroundColor: 'transparent',
  fontFamily: 'Chalkduster',
  fontVariant: 'small-caps',
  fontSize: 24 * window.innerWidth / 1440,
  cursor: 'pointer'
};

const selectedCSS = {
  textDecoration: 'solid underline purple 3px',
  fontWeight: 'bold',
  border: 0,
  backgroundColor: 'transparent',
  fontFamily: 'Chalkduster',
  fontVariant: 'small-caps',
  fontSize: 28 * window.innerWidth / 1440,
  cursor: 'pointer'
};

const logoURL = 'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349142540-3M3CF52BRESZIX334XQE/ke17ZwdGBToddI8pDm48kPpAxxAMkdWLvZ8KPwskBm17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p5uBJOnOmCWBN4JfYsIDyS6K0NYX-Vp73rpruyycpr9CU5uQp4nuBxKgx0JQoevkw/Horn-loudspeaker-birds+soaked.jpg?format=750w';

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