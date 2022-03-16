import API_DEV from "./api-dev";
// import API_LOCAL from "./api-local";
import API_PROD from "./api-prod";
const hostname = window.location.hostname;
const port = window.location.port;
let isLocalApi = port >= 3000;

export const API =
  hostname === "localhost" && isLocalApi
    ? API_PROD
    : hostname === "localhost"
    ? API_DEV
    : API_PROD;
