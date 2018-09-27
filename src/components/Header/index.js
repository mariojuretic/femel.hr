import React from 'react';
import HeaderInfoBar from './InfoBar';
import HeaderSearchBar from './SearchBar';

const Header = () => (
  <div>
    <HeaderInfoBar />
    <div className="content-container">
      <div className="header__content">
        <img src="https://placehold.it/120x60" />
        <div className="header__actions">
          <HeaderSearchBar />
        </div>
      </div>
    </div>
  </div>
);

export default Header;