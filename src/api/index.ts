import axios from 'axios'

const api = axios.create({
  baseURL: 'https://blockchain.info'
})

export default api