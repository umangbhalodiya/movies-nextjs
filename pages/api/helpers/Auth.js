import { AppSettings, STORAGEKEY } from "../config/APP/app.config";
import localstorageUtil from "../utils/localstore.util.js";


class Auth {
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static setAuthToken(token) {
    sessionStorage.setItem(STORAGEKEY.token, token);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return sessionStorage.getItem(STORAGEKEY.token) !== null;
  }
  static isUserAuthenticat() {
    return (localstorageUtil.get_data("token") !== (null || undefined)) || (localstorageUtil.get_data("Admintoken") !== (null || undefined));
  }
  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    sessionStorage.removeItem(STORAGEKEY.token);
    sessionStorage.removeItem(STORAGEKEY.authData);
    sessionStorage.removeItem(STORAGEKEY.userData);
    sessionStorage.removeItem(STORAGEKEY.layoutData);
  }
  static deauthenticateLocalUser(){
    localstorageUtil.remove_all();
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */
  static getToken() {
    // return sessionStorage.getItem(STORAGEKEY.token);
    return localstorageUtil.get_data('token');
  }
  static getAdminDetail() {
    // return sessionStorage.getItem(STORAGEKEY.token);\
    const localdata=localstorageUtil.get_data("Admininfo");
    // console.log("Localdata ",localdata)
    if(localdata === (null || undefined))
      return "";
    return localdata;
  }
  static getUserDetail() {
    // return sessionStorage.getItem(STORAGEKEY.token);\
    const localdata=localstorageUtil.get_data("userinfo");
    // console.log("Localdata ",localdata)
    if(localdata === (null || undefined))
      return "";
    return localdata;
  }
  static getWorkshopDetail() {
    // return sessionStorage.getItem(STORAGEKEY.token);\
    const localdata=localstorageUtil.get_data("workshopinfo");
    // console.log("Localdata ",localdata)
    if(localdata === (null || undefined))
      return "";
    return localdata;
  }
  static getVendorDetail() {
    // return sessionStorage.getItem(STORAGEKEY.token);\
    const localdata=localstorageUtil.get_data("vendorinfo");
    // console.log("Localdata ",localdata)
    if(localdata === (null || undefined))
      return "";
    return localdata;
  }

  /*
   * Sets userData to sessionStorage
   * */
  static setAuthData(data) {
    sessionStorage.setItem(STORAGEKEY.authData, JSON.stringify(data));
  }

  /*
   * Get userData
   *
   * */
  static getAuthData() {
    try {
      return JSON.parse(sessionStorage.getItem(STORAGEKEY.authData));
    } catch (e) {
      return {};
    }
  }

  /*
   * Sets userData to sessionStorage
   * */
  static setUserData(data) {
    sessionStorage.setItem(STORAGEKEY.userData, JSON.stringify(data));
  }

  /*
   * Get userData
   * */
  static getUserData() {
    try {
      return JSON.parse(sessionStorage.getItem(STORAGEKEY.userData));
    } catch (e) {
      return {};
    }
  }

  /**
   * Get the full username
   *
   * @returns {string}
   */
  static getUsername() {
    let userData = this.getUserData();
    if (userData) {
      let firstname = userData.firstname || "";
      let lastname = userData.lastname || "";
      return firstname.trim() + " " + lastname.trim();
    } else {
      return "";
    }
  }

  /**
   * Get the email of logged in user
   *
   * @returns {string}
   */
  static getEmail() {
    let email = this.getUserData().email || "";
    return email;
  }

  /**
   * Get user role
   *
   * @returns {string}
   */
  static getUserRole() {
    /* @TODO No role attrib. Double check with api */
    let userdata = this.getUserData();
    let role = "Administrator";
    if (userdata) {
      role = userdata.role;
    }
    return role;
  }

  /**
   * Get user companyId
   *
   * @returns {string}
   */
  static getUserCompanyId() {
    let company = this.getUserCompany();
    let companyId = null;
    if (company) {
      if (company.hasOwnProperty("id")) {
        companyId = company.id;
      }
    }
    return companyId;
  }

  /*
   * Get All Companies
   * */
  static getUserCompanies() {
    let userData = this.getUserData();
    let companies = [];
    if (
      userData &&
      userData.hasOwnProperty("companies") &&
      userData.companies &&
      userData.companies?.length
    ) {
      companies = userData.companies;
    }
    return companies;
  }

  /**
   * Get user company
   */
  static getUserCompany() {
    let companies = this.getUserCompanies();
    if (companies && companies?.length) {
      return companies[0];
    } else {
      return null;
    }
  }

  /**
   * Get user company
   */
  static getUserCompanyName() {
    let company = this.getUserCompany();
    if (company) {
      return company.name;
    } else {
      return null;
    }
  }

  /*
   * get User Roles
   * */
  static getUserRoles() {
    let userData = this.getUserData();
    if (
      userData &&
      userData.hasOwnProperty("roles") &&
      userData.roles &&
      userData.roles?.length
    ) {
      return userData.roles;
    } else {
      return [];
    }
  }

  /*
   * get navigation menus Role wise
   * */
  static getUserNavigation() {
    let userData = this.getUserData();
    if (
      userData &&
      userData.hasOwnProperty("navigations") &&
      userData.navigations &&
      userData.navigations?.length
    ) {
      return userData.navigations;
    } else {
      return [];
    }
  }

  /*
   * get default navigation route
   * */
  static getDefaultNavigationRoute() {
    let navigations = this.getUserNavigation();
    let defaultNavigation = AppSettings.defaultNavigation;
    if (navigations && navigations?.length) {
      for (let i = 0; i < navigations?.length; i++) {
        if (
          navigations[i].hasOwnProperty("defaultNavigation") &&
          navigations[i].defaultNavigation
        ) {
          defaultNavigation = navigations[i].defaultNavigation;
        }
      }
    }
    return defaultNavigation;
  }
}

export default Auth;
