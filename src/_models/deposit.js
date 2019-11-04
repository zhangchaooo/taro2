import Taro from '@tarojs/taro'
import { deposit } from '../_service/deposit'

export default {
  namespace: 'deposit',
  state: {
    /* recipients_name: '',
    recipients_mobile: '',
    name: '',
    selectorChecked: '家居',
    selector: ['家电', '家居', '建材', '其他'] */
  },

  effects: {
    *deposit({ payload }, { call, put }) {
      yield call(deposit, payload)
      /* console.log(payload) */
      yield put({ type: 'save', payload })
    }
  },

  reducers: {
    save(state, { payload: data }) {
      console.log('save')

      return { ...state, ...data }
    }
  }
}
