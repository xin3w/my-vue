import axios from 'axios'
export default {
  get_block_stats (coinType) {
    return axios.get(`/basedata/coin/${coinType}/block_stats`)
  },
  get_rates (coinType) {
    return axios.get(`/basedata/coin/${coinType}/rates`)
  }
}
