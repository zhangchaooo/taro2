import Taro from '@tarojs/taro'
import { login } from '../_service/member'

export default {
  namespace: 'member',
  state: {},

  effects: {
    *login({ payload, callback }, { call, put }) {
      const res = yield call(login, payload)
      console.log(res)
      console.log(res.access_token)

      if (res) {
        Taro.setStorageSync('access_token', res.access_token)
      }
      if (callback) callback(res)
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
