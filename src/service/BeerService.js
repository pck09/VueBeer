import Api from './Api'

export default {
  getBeers (params = {}) {
    return Api().get('/beers', { params })
  }
}
