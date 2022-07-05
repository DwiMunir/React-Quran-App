import axios from "axios"

const url = "https://api.quran.sutanlab.id/"

export default axios.create({
  baseURL: url,
})