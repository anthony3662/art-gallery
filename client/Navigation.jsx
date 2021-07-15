import React from 'react';


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
    var selectedCSS = 'selectedCSS';
    var buttonCSS = 'buttonCSS';
    return (
      <div id="topPanel">
        <p id="logo" onClick={this.logoClick} >Ben Brock</p>
        <div id="menu">
          <button class={this.state.page === 'Paintings' ? selectedCSS : buttonCSS} onClick={this._onClick}>Paintings</button>
          <button class={this.state.page === 'Drawings' ? selectedCSS : buttonCSS} onClick={this._onClick}>Drawings</button>
          <button class={this.state.page === 'Videos' ? selectedCSS : buttonCSS} onClick={this._onClick}>Videos</button>
          <button class={this.state.page === 'CV' ? selectedCSS : buttonCSS} onClick={this._onClick}>CV</button>
        </div>
      </div>
    );
  }
}
export default Navigation;