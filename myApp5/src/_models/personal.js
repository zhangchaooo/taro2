import Taro from '@tarojs/taro'
import { getInfo } from '../_service/personal'

export default {
  namespace: 'personal',
  state: {
    name: '',
    sex: '',
    mobile: '',
    id_card: '',
    unit: '',
    sexNumber: 1,
    head_image: ''
  },

  effects: {
    *getInfo({}, { call, put }) {
      const res = yield call(getInfo)
      if (res) {
        /* console.log(res.depositor_wechat_user) */
        console.log(res)
        const name = res.nickname
        const head_image = res.depositor_wechat_user.head_image
        const sexNumber = res.depositor_wechat_user.sex
        const mobile = res.depositor_wechat_user.mobile
        const id_card = res.depositor_wechat_user.id_card
        const unit = res.depositor_wechat_user.unit
        yield put({
          type: 'save',
          payload: {
            name,
            sexNumber,
            mobile,
            id_card,
            unit,
            head_image
          }
        })
      }
    }
  },

  reducers: {
    save(state, { payload: data }) {
      console.log('get res and save  => complete!')
      return { ...state, ...data }
    }
  }
}
