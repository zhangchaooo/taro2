import Taro from '@tarojs/taro'
import { login } from '../_service/member'

export default {
  namespace: 'member',
  state: {},

  effects: {
    *login({ payload, callback }, { call, put }) {
      const res = yield call(login, payload)
      console.log(res)

      if (res.code === 0) {
        Taro.setStorageSync('access_token', res.data.access_token)
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
