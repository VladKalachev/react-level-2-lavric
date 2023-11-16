import axios from "axios";


function createHttpPlugin(url: string) {
  const http = axios.create({
    baseURL: url
  })

  return http;
}

export default createHttpPlugin;