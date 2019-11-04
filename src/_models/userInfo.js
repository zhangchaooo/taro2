import Taro from '@tarojs/taro'
import { getPersonalInfo, getUserInfo } from '../_service/userInfo'

export default {
  namespace: 'userInfo',
  state: {
    name: '',
    id_card: '',
    head_image: '',
    res: [],
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
      }
    ]
  },

  effects: {
    *getUserInfo({}, { call, put }) {
      const res = yield call(getUserInfo)
      if (res) {
        const name = res.depositor_wechat_user.name
        const head_image = res.depositor_wechat_user.head_image
        const id_card = res.depositor_wechat_user.id_card
        yield put({
          type: 'save',
          payload: {
            name,
            head_image,
            id_card
          }
        })
      }
    }
  },

  reducers: {
    save(state, { payload }) {
      /* console.log('pay', payload) */
      return { ...state, ...payload }
    }
  }
}
