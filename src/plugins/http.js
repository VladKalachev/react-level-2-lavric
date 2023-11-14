import axios from "axios";


function createHttpPlugin(url) {
  const http = axios.create({
    baseURL: url
  })

  return http;
}

export default createHttpPlugin;