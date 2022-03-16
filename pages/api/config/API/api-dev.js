// const protocol = "http";
// const host = "192.168.29.123:5500/api";

const protocol = "https";
const host = "api.nijateleurgentcare.rejoicehub.com/api";

const port = "";
const trailUrl = "";

const hostUrl = `${protocol}://${host}${port ? ":" + port : ""}/`;
const endpoint = `${protocol}://${host}${port ? ":" + port : ""}${trailUrl}`;

export default {
    protocol: protocol,
    host: host,
    port: port,
    apiUrl: trailUrl,
    endpoint: endpoint,
    hostUrl: hostUrl,
};