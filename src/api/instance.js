import axios from 'axios'

// axios配置
let instance = axios.create({
  // baseURL: '',
  timeout: 30000
});

export default instance