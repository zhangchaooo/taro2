import Taro from '@tarojs/taro'
import { getCheckList, gettopInfo } from '../_service/check'

export default {
  namespace: 'check',
  state: {
    res: [1],
    checkList: { list: [] }
  },

  effects: {
    *getCheckList({ payload = {}, callback }, { call, put, select }) {
      const response = yield call(getCheckList, payload)
      const responsetop = yield call(gettopInfo, payload)
      /* console.log('toptop is=>', responsetop) */

      const name = responsetop.depositor_wechat_user.name
      const head_image = responsetop.depositor_wechat_user.head_image
      const id_card = responsetop.depositor_wechat_user.id_card
      /* console.log('toptop', name, head_image, id_card) */

      yield put({
        type: 'save',
        payload: {
          name,
          head_image,
          id_card
        }
      })

      const { a, b } = yield select()
      if (response) {
        yield put({
          type: 'saveList',
          payload: {
            key: 'checkList',
            page: payload.page,
            state: payload.state,
            response
          }
        })
      }
      if (callback) callback(response)
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
    saveList(state, { payload }) {
      const { key, page, response } = payload
      let _list = response.data
      const { list } = state[key]

      if (!_list) {
        _list = response.data
        return {
          ...state,
          [key]:
            page === 1
              ? { ...response.data, list: _list }
              : { ...response.data, list: [...list, ..._list] }
        }
      }
      return {
        ...state,
        [key]:
          page === 1
            ? { list: [...list, ..._list] }
            : { list: [...list, ..._list] }
      }
    }
  }
}
