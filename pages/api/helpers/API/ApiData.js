import { API } from "../../config/API/api.config"; 
// import { useState, useCallback,useMemo, useEffect } from "react";

// import Loader from "../../components/Loader/Loader"
// import Auth from "../Auth";
import * as authUtil from "../../utils/auth.util";
export const BaseURL = API.endpoint + "/";

const axios = require("axios").default;

const defaultHeaders = {
    isAuth: true,
    AdditionalParams: {},
    isJsonRequest: true,
    api_key: true,
};

// const useAxiosLoader = () => {
//   const [counter, setCounter] = useState(0);
//   const inc = useCallback(() => setCounter(counter => counter + 1), [setCounter]); // add to counter
//   const dec = useCallback(() => setCounter(counter => counter - 1), [setCounter]); // remove from counter

//   const interceptors = useMemo(() => ({
//     request: config => (inc(), config),
//     response: response => (dec(), response),
//     error: error => (dec(), Promise.reject(error)),
//   }), [inc, dec]); // create the interceptors

//   useEffect(() => {
//     // add request interceptors
//     const reqInterceptor = axios.interceptors.request.use(interceptors.request, interceptors.error);
//     // add response interceptors
//     const resInterceptor =  axios.interceptors.response.use(interceptors.response, interceptors.error);
//     return () => {
//       // remove all intercepts when done
//       axios.interceptors.request.eject(reqInterceptor);
//       axios.interceptors.response.eject(resInterceptor);
//     };
//   }, [interceptors]);

//   return [counter > 0];
// };

// const GlobalLoader = () => {
//     const [loading] = useAxiosLoader();

//     return(

//         loading ? "loading" : 'not loading'

//     );
// }

// setTimeout(() => {
//   axios.get('https://swapi.co/api/people/1');
//   axios.get('https://swapi.co/api/people/2');
//   axios.get('https://swapi.co/api/people/3');
// }, 1000);

export const ApiPostNoAuth = (type, userData) => {
    // const [loading] = useAxiosLoader();
    console.log("In api post without auth", API);
    console.log(BaseURL);
    return (
        // loading ? Loader()  :

        new Promise((resolve, reject) => {
            axios
                .post(
                    BaseURL + type,
                    userData,
                    getHttpOptions({ ...defaultHeaders, isAuth: false })
                )
                .then((responseJson) => {
                    console.log("call no auth api");
                    resolve(responseJson);
                })
                .catch((error) => {
                    if (
                        error &&
                        error.hasOwnProperty("response") &&
                        error.response &&
                        error.response.hasOwnProperty("data") &&
                        error.response.data &&
                        error.response.data.hasOwnProperty("error") &&
                        error.response.data.error
                    ) {
                        reject(error.response.data.error);
                    } else {
                        reject(error);
                    }
                });
        })
    );
};

export const ApiPutNoAuth = (type, userData) => {
    console.log("In api put without auth", API);
    console.log(BaseURL);
    // debugger
    return new Promise((resolve, reject) => {
        axios
            .put(
                BaseURL + type,
                userData,
                getHttpOptions({ ...defaultHeaders, isAuth: false })
            )
            .then((responseJson) => {
                console.log("call no auth api");
                resolve(responseJson);
            })
            .catch((error) => {
                if (
                    error &&
                    error.hasOwnProperty("response") &&
                    error.response &&
                    error.response.hasOwnProperty("data") &&
                    error.response.data &&
                    error.response.data.hasOwnProperty("error") &&
                    error.response.data.error
                ) {
                    reject(error.response.data.error);
                } else {
                    reject(error);
                }
            });
    });
};

export const ApiGetNoAuth = (type) => {
    return new Promise((resolve, reject) => {
        axios
            .get(
                BaseURL + type,
                getHttpOptions({ ...defaultHeaders, isAuth: false })
            )
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                if (
                    error &&
                    error.hasOwnProperty("response") &&
                    error.response &&
                    error.response.hasOwnProperty("data") &&
                    error.response.data &&
                    error.response.data.hasOwnProperty("error") &&
                    error.response.data.error
                ) {
                    reject(error.response.data.error);
                } else {
                    reject(error);
                }
            });
    });
};

export const Api = (type, methodtype, userData) => {
    return new Promise((resolve, reject) => {
        userData = userData || {};
        axios({
            url: BaseURL + type,
            headers: getHttpOptions(),
            data: userData,
            type: methodtype,
        })
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                if (
                    error &&
                    error.hasOwnProperty("response") &&
                    error.response &&
                    error.response.hasOwnProperty("data") &&
                    error.response.data &&
                    error.response.data.hasOwnProperty("error") &&
                    error.response.data.error
                ) {
                    reject(error.response.data.error);
                } else {
                    reject(error);
                }
            });
    });
};

export const ApiGet = (type) => {
    return new Promise((resolve, reject) => {
        axios
            .get(BaseURL + type, getHttpOptions())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                if (
                    error &&
                    error.hasOwnProperty("response") &&
                    error.response &&
                    error.response.hasOwnProperty("data") &&
                    error.response.data &&
                    error.response.data.hasOwnProperty("error") &&
                    error.response.data.error
                ) {
                    reject(error.response.data.error);
                } else {
                    reject(error);
                }
            });
    });
};

export const ApiPost = (type, userData, AdditionalHeader) => {
    return new Promise((resolve, reject) => {
        // console.log("dataBody", userData);
        axios
            .post(BaseURL + type, userData, {
                ...getHttpOptions(),
                ...AdditionalHeader,
            })
            .then((responseJson) => {
                // console.log("responseJson",responseJson);
                resolve(responseJson);
            })
            .catch((error) => {
                console.log("error", error);

                if (
                    error &&
                    error.hasOwnProperty("response") &&
                    error.response &&
                    error.response.hasOwnProperty("data") &&
                    error.response.data &&
                    error.response.data.hasOwnProperty("error") &&
                    error.response.data.error
                ) {
                    console.log("reject");
                    reject(error.response.data.error);
                } else {
                    console.log("reject", error);

                    reject(error);
                }
            });
    });
};

export const ApiPut = (type, userData) => {
    return new Promise((resolve, reject) => {
        axios
            .put(BaseURL + type, userData, getHttpOptions())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                if (
                    error &&
                    error.hasOwnProperty("response") &&
                    error.response &&
                    error.response.hasOwnProperty("data") &&
                    error.response.data &&
                    error.response.data.hasOwnProperty("error") &&
                    error.response.data.error
                ) {
                    reject(error.response.data.error);
                } else {
                    reject(error);
                }
            });
    });
};

export const ApiPatch = (type, userData) => {
    return new Promise((resolve, reject) => {
        axios
            .patch(BaseURL + type, userData, getHttpOptions())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                if (
                    error &&
                    error.hasOwnProperty("response") &&
                    error.response &&
                    error.response.hasOwnProperty("data") &&
                    error.response.data &&
                    error.response.data.hasOwnProperty("error") &&
                    error.response.data.error
                ) {
                    reject(error.response.data.error);
                } else {
                    reject(error);
                }
            });
    });
};

export const ApiDelete = (type, userData) => {
    return new Promise((resolve, reject) => {
        axios({
            url: BaseURL + type,
            method: "delete",
            headers: getHttpOptions().headers,
            data: userData,
        })
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                if (
                    error &&
                    error.hasOwnProperty("response") &&
                    error.response &&
                    error.response.hasOwnProperty("data")
                    // &&
                    // error.response.data &&
                    // error.response.data.hasOwnProperty("error") &&
                    // error.response.data.error
                ) {
                    resolve(error.response.data);
                } else {
                    resolve(error);
                }
            });
    });
};

export const ApiDownload = (type, userData) => {
    let method = userData && Object.keys(userData)?.length > 0 ? "POST" : "GET";
    return new Promise((resolve, reject) => {
        axios({
            url: BaseURL + type,
            method,
            headers: getHttpOptions().headers,
            responseType: "blob",
            data: userData,
        })
            .then((res) => resolve(new Blob([res.data])))
            .catch((error) => {
                if (
                    error &&
                    error.hasOwnProperty("response") &&
                    error.response &&
                    error.response.hasOwnProperty("data") &&
                    error.response.data &&
                    error.response.data.hasOwnProperty("error") &&
                    error.response.data.error
                ) {
                    reject(error.response.data.error);
                } else {
                    reject(error);
                }
            });
    });
};

export const ApiGetBuffer = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "GET",
            mode: "no-cors",
        })
            .then((response) => {
                if (response.ok) {
                    console.log(response.headers.get("content-type"));
                    console.log(response);
                    return response.buffer();
                } else {
                    resolve(null);
                }
            })
            .then((buffer) => {
                resolve(buffer);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
    });
};

export const Logout = () => {
    return ApiPost("/accounts/logout", {});
};

export const getHttpOptions = (options = defaultHeaders) => {
    let headers = {};
    if (options.hasOwnProperty("isAuth") && options.isAuth) {
        if (authUtil.getToken()) {
            headers["Authorization"] = authUtil.getToken();
        } else if (authUtil.getAdminToken()) {
            headers["Authorization"] = authUtil.getAdminToken();
        }
    }

    if (options.hasOwnProperty("api_key") && options.api_key) {
        headers["api_key"] = "6QSy49rUTH";
    }
    if (options.hasOwnProperty("isJsonRequest") && options.isJsonRequest) {
        headers["Content-Type"] = "application/json";
    }

    if (
        options.hasOwnProperty("AdditionalParams") &&
        options.AdditionalParams
    ) {
        headers = { ...headers, ...options.AdditionalParams };
    }

    return { headers };
};
