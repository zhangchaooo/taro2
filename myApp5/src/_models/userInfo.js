import Taro from '@tarojs/taro'
import { getPersonalInfo } from '../_service/userInfo'

export default {
  namespace: 'userInfo',
  state: {},

  effects: {
    *getPersonalInfo({}, { call }) {
      console.log('here')

      const res = yield call(getPersonalInfo)
      if (res) {
        console.log(res)
      }
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
