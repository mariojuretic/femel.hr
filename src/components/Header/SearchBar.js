import React from 'react';

export default class HeaderSearchBar extends React.Component {
  state = {
    search: ''
  };
  onSearchChange = (e) => {
    const search = e.target.value.trim();
    this.setState(() => ({ search }));
  };
  onSearchSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <form className="header__search" onSubmit={this.onSearchSubmit}>
        <input className="header__search-input" type="text" name="search" placeholder="Search..." onChange={this.onSearchChange} />
        <button className="header__search-button"><i className="fas fa-search"></i></button>
        <div className={'header__search-results' + (this.state.search !== '' ? ' header__search-results--active' : '')}>
          <p>No results for '{this.state.search}'</p>
        </div>
      </form>
    );
  }
}