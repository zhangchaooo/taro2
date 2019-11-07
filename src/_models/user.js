import Taro from '@tarojs/taro'
import { getCheckList, gettopInfo, getCheckList2 } from '../_service/check'

export default {
  namespace: 'user',
  state: {
    res: [1],
    checkList: { list: [] },
    avatarUrl: ''
  },

  effects: {
    *orderList({ payload = {}, callback }, { call, put, select }) {
      const response = yield call(getCheckList, payload)
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
      /* console.log('pei', payload) */

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
