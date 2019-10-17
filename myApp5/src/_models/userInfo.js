import Taro from '@tarojs/taro'
import { getPersonalInfo } from '../_service/userInfo'

export default {
  namespace: 'userInfo',
  state: {
    res: [],
    resx: [
      {
        recipients_name: 'beijv',
        recipients_mobile: '13269875647',
        name: '悲剧',
        created_at: '2019.11.04',
        state: 3
      },
      {
        recipients_name: 'xijv',
        recipients_mobile: '13269875647',
        name: '喜剧',
        created_at: '2019.11.04',
        state: 2
      },
      {
        recipients_name: 'sanda',
        recipients_mobile: '13269875647',
        name: '散打',
        created_at: '2019.11.04',
        state: 2
      },
      {
        recipients_name: 'chongjibo',
        recipients_mobile: '13269875647',
        name: '冲击波',
        created_at: '2019.11.041',
        state: 1
      },
      {
        recipients_name: 'liyunlong',
        recipients_mobile: '13269875647',
        name: '李云龙',
        created_at: '2019.11.04',
        state: 1
      },
      {
        recipients_name: 'sanda',
        recipients_mobile: '13269875647',
        name: 'zhaozhengwei',
        created_at: '2019.11.04',
        state: 1
      }
    ]
  },

  effects: {
    *getPersonalInfo({}, { call, put }) {
      /* console.log('s') */

      const res = yield call(getPersonalInfo)
      if (res) {
        console.log(
          res
          /* res[0].recipients_mobile,
          res[0].recipients_name,
          res[0].name,
          res[0].created_at,
          res[0].state */
        )
        yield put({
          type: 'save',
          payload: {
            res
          }
        })
      }
    }
  },

  reducers: {
    save(state, { payload }) {
      /* console.log('001') */

      return { ...state, ...payload }
    }
  }
}
