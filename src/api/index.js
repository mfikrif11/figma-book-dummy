import axios from "axios"

const axiosInstance = axios.create({
  baseUrl: "https://bookapi.cm.hmw.lol/api/",
})

export { axiosInstance }
