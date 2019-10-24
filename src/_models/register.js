import Taro from '@tarojs/taro'
import { userRegister } from '../_service/register'

export default {
  namespace: 'register',
  state: {},

  effects: {
    *userRegister({ payload }, { call }) {
      // console.log(2)
      const res = yield call(userRegister, payload)
      console.log(res)

      /* if (res.code === 0) {
        Taro.setStorageSync('access_token', res.data.access_token)
      }
      if (callback) callback(res) */
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
