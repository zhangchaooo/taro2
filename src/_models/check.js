import Taro from '@tarojs/taro'
import { getCheckList, gettopInfo } from '../_service/check'

export default {
  namespace: 'check',
  state: {
    res: [1],
    checkList: { list: [] },
    avatarUrl: '',
    resx: [
      {
        recipients_name: 'beijv',
        recipients_mobile: '13269875647',
        name: '悲剧1',
        created_at: '2019.11.04',
        state: 3
      },
      {
        recipients_name: 'beijv2',
        recipients_mobile: '13269875647',
        name: '悲剧2',
        created_at: '2019.11.04',
        state: 1
      },
      {
        recipients_name: 'beijv3',
        recipients_mobile: '13269875647',
        name: '悲剧3',
        created_at: '2019.11.04',
        state: 2
      },
      {
        recipients_name: 'beijv4',
        recipients_mobile: '13269875647',
        name: '悲剧4',
        created_at: '2019.11.04',
        state: 1
      },
      {
        recipients_name: 'beijv5',
        recipients_mobile: '13269875647',
        name: '悲剧5',
        created_at: '2019.11.04',
        state: 2
      },
      {
        recipients_name: 'beijv6',
        recipients_mobile: '13269875647',
        name: '悲剧6',
        created_at: '2019.11.04',
        state: 1
      },
      {
        recipients_name: 'beijv7',
        recipients_mobile: '13269875647',
        name: '悲剧7',
        created_at: '2019.11.04',
        state: 1
      },
      {
        recipients_name: 'beijv8',
        recipients_mobile: '13269875647',
        name: '悲剧8',
        created_at: '2019.11.04',
        state: 2
      },
      {
        recipients_name: 'beijv9',
        recipients_mobile: '13269875647',
        name: '悲剧9',
        created_at: '2019.11.04',
        state: 2
      },
      {
        recipients_name: 'beijv10',
        recipients_mobile: '13269875647',
        name: '悲剧10',
        created_at: '2019.11.04',
        state: 3
      },
      {
        recipients_name: 'beijv11',
        recipients_mobile: '13269875647',
        name: '悲剧11',
        created_at: '2019.11.04',
        state: 3
      },
      {
        recipients_name: 'beijv12',
        recipients_mobile: '13269875647',
        name: '悲剧12',
        created_at: '2019.11.04',
        state: 3
      },
      {
        recipients_name: 'beijv13',
        recipients_mobile: '13269875647',
        name: '悲剧13',
        created_at: '2019.11.04',
        state: 2
      },
      {
        recipients_name: 'beijv14',
        recipients_mobile: '13269875647',
        name: '悲剧14',
        created_at: '2019.11.04',
        state: 3
      },
      {
        recipients_name: 'beijv15',
        recipients_mobile: '13269875647',
        name: '悲剧15',
        created_at: '2019.11.04',
        state: 1
      },
      {
        recipients_name: 'beijv16',
        recipients_mobile: '13269875647',
        name: '悲剧16',
        created_at: '2019.11.04',
        state: 2
      },
      {
        recipients_name: 'beijv17',
        recipients_mobile: '13269875647',
        name: '悲剧17',
        created_at: '2019.11.04',
        state: 3
      }
    ]
  },

  effects: {
    *getCheckList({ payload = {}, callback }, { call, put, select }) {
      const response = yield call(getCheckList, payload)
      const responsetop = yield call(gettopInfo, payload)
      /* console.log('toptop is=>', responsetop) */
      /* Taro.getUserInfo().then(res => {
        console.log('hahaha', res.userInfo.avatarUrl)
        const avatarUrl = res.userInfo.avatarUrl
        console.log('aaa', avatarUrl)
      }) */
      const name = responsetop.depositor_wechat_user.name
      const head_image = responsetop.depositor_wechat_user.head_image
      const id_card = responsetop.depositor_wechat_user.id_card
      const sex = responsetop.depositor_wechat_user.sex
      /* console.log('sex is => ', sex) */

      /* console.log('toptop', name, head_image, id_card) */

      yield put({
        type: 'save',
        payload: {
          name,
          head_image,
          id_card,
          sex
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
