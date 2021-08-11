import React from 'react';


const logoURL = 'https://i.ibb.co/prcfbk1/logo.png';

//this.props.changePage(page)
class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
    this.logoClick = this.logoClick.bind(this);

    this.state = {
      page: 'Painting'
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
      page: 'Painting'
    });
    this.props.changePage('Painting');
  }

  render() {
    var selectedCSS = window.screen.width <= 600 ? 'mobileSelected selectedCSS' : 'selectedCSS';
    var buttonCSS = window.screen.width <= 600 ? 'mobileButton buttonCSS' : 'buttonCSS';
    return (
      <div id="topPanel">
        <p className={window.screen.width <=600 ? 'mobileLogo logo' : 'logo'} onClick={this.logoClick} >Ben Brock</p>
        <div class={window.screen.width <= 600 ? 'mobileMenu' : 'menu'}>
          <button class={this.state.page === 'Painting' ? selectedCSS : buttonCSS} onClick={this._onClick}>Painting</button>
          <button class={this.state.page === 'Drawing' ? selectedCSS : buttonCSS} onClick={this._onClick}>Drawing</button>
          <button class={this.state.page === 'Video' ? selectedCSS : buttonCSS} onClick={this._onClick}>Video</button>
          <button class={this.state.page === 'Social' ? selectedCSS : buttonCSS} onClick={this._onClick}>Social</button>
        </div>
      </div>
    );
  }
}
export default Navigation;