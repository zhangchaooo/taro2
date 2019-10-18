import Taro from '@tarojs/taro'
import { getPersonalInfo, getNewPersonalInfo } from '../_service/userInfo'

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
    *getPersonalInfo({ payload }, { call, put }) {
      const res = yield call(getPersonalInfo, { payload })
      /* console.log(res) */

      const response = res.data
      console.log(response)

      yield put({
        type: 'save',
        payload: {
          res: response
        }
      })
    },
    *getNewPersonalInfo({ payload }, { call, put }) {
      const res = yield call(getNewPersonalInfo, { payload })

      const newResponse = res.data
      console.log('this is new =>', newResponse)
      /* const res = this.state.res.concat(newResponse) */
      yield put({
        type: 'save',
        payload: {
          res: newResponse
        }
      })
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
