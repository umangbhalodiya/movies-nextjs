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
            <div className="search-class"> <div className="container">
              <input placeholder='Search...' className='js-search' type="text" />
              <i className="fa fa-search"></i>
            </div>
            </div>
            <div className="mobile-view-show">
              <div className="mobile-menu-alignment">
                <div className=" ">
                  <div className="user-login-alignment">
                    <div className="logout-button">
                      <div className="profile-round">sdfsdfsdfds</div>

                      <div className="user-profile-menu-design user-profile-show">
                        <div className="user-profile-submenu">
                          <p>User Profile</p>

                          <p>Logout</p>
                        </div>
                      </div>
                    </div>
                    <div className="user-login-text-style">
                      <b>Hello, </b>
                      asdasd
                    </div>
                  </div>

                  <div className="login-button">
                    <span>Log in</span>

                    <button>Join for Free</button>
                  </div>
                </div>
                <div>
                  <i className="fas fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
