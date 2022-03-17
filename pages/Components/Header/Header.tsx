import React, { useState } from "react";
// import "../Header/Header.scss";

const Header = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  return (
    <div>
      <header>
        <div className="container">
          <div className="header-alignment">
            <div className="website-name"> Moobiess</div>
            <div className="search-class">
              <div className="container">
                <input
                  placeholder="Search..."
                  className="js-search"
                  type="text"
                />
                <i className="fa fa-search"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
