export function authHeader() {
    // return authorization header with basic auth credentials
    let id = JSON.parse(localStorage.getItem('id'));

    if (id) {
        return { 'Authorization': 'Basic ' + id };
    } else {
        return {};
    }
}
