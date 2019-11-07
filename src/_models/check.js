import Taro from '@tarojs/taro'
import { getCheckList, gettopInfo, getCheckList2 } from '../_service/check'

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
      console.log(payload)
      /* let response = yield call(getCheckList, payload) */

      /* if (zhangchao) response = response1 */
      const responsetop = yield call(gettopInfo, payload)

      const { zhangchao } = payload

      const response1 = {
        data: [
          {
            collect_time: '2019-11-01 18:31:07',
            collect_way: 1,
            community_id: 1,
            community_name: '企鹅智家测试社区',
            created_at: '2019-10-15 17:29:02',
            depositor_id: 1,
            id: 1,
            name: '快递',
            recipients_address: null,
            recipients_mobile: '18654889732',
            recipients_name: '李俊',
            remark: null,
            state: 2,
            updated_at: '2019-11-01 18:31:07',
            verification_id: 20,
            verification_mobile: '15620003819',
            verification_name: '齐鑫磊'
          },
          {
            collect_time: '2019-11-01 18:31:07',
            collect_way: 1,
            community_id: 1,
            community_name: '企鹅智家测试社区',
            created_at: '2019-10-15 17:29:02',
            depositor_id: 1,
            id: 1,
            name: '快递',
            recipients_address: null,
            recipients_mobile: '18654889732',
            recipients_name: '李俊',
            remark: null,
            state: 2,
            updated_at: '2019-11-01 18:31:07',
            verification_id: 20,
            verification_mobile: '15620003819',
            verification_name: '齐鑫磊'
          },
          {
            collect_time: '2019-11-01 18:31:07',
            collect_way: 1,
            community_id: 1,
            community_name: '企鹅智家测试社区',
            created_at: '2019-10-15 17:29:02',
            depositor_id: 1,
            id: 1,
            name: '快递',
            recipients_address: null,
            recipients_mobile: '18654889732',
            recipients_name: '李俊',
            remark: null,
            state: 2,
            updated_at: '2019-11-01 18:31:07',
            verification_id: 20,
            verification_mobile: '15620003819',
            verification_name: '齐鑫磊'
          },
          {
            collect_time: '2019-11-01 18:31:07',
            collect_way: 1,
            community_id: 1,
            community_name: '企鹅智家测试社区',
            created_at: '2019-10-15 17:29:02',
            depositor_id: 1,
            id: 1,
            name: '快递',
            recipients_address: null,
            recipients_mobile: '18654889732',
            recipients_name: '李俊',
            remark: null,
            state: 2,
            updated_at: '2019-11-01 18:31:07',
            verification_id: 20,
            verification_mobile: '15620003819',
            verification_name: '齐鑫磊'
          },
          {
            collect_time: '2019-11-01 18:31:07',
            collect_way: 1,
            community_id: 1,
            community_name: '企鹅智家测试社区',
            created_at: '2019-10-15 17:29:02',
            depositor_id: 1,
            id: 1,
            name: '快递',
            recipients_address: null,
            recipients_mobile: '18654889732',
            recipients_name: '李俊',
            remark: null,
            state: 2,
            updated_at: '2019-11-01 18:31:07',
            verification_id: 20,
            verification_mobile: '15620003819',
            verification_name: '齐鑫磊'
          }
        ],
        meta: {
          pagination: {
            count: 5,
            current_page: 1,
            per_page: 5,
            total: 5,
            total_pages: 1
          }
        }
      }
      console.log(zhangchao)
      const response = zhangchao
        ? response1
        : {
            data: [],
            meta: {
              pagination: {
                count: 0,
                current_page: 0,
                per_page: 0,
                total: 0,
                total_pages: 0
              }
            }
          }

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
            /* state_type: payload.state_type */
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

/* const response = {
        data: [
          {
            collect_time: '2019-11-01 18:31:07',
            collect_way: 1,
            community_id: 1,
            community_name: '企鹅智家测试社区',
            created_at: '2019-10-15 17:29:02',
            depositor_id: 1,
            id: 1,
            name: '快递',
            recipients_address: null,
            recipients_mobile: '18654889732',
            recipients_name: '李俊',
            remark: null,
            state: 2,
            updated_at: '2019-11-01 18:31:07',
            verification_id: 20,
            verification_mobile: '15620003819',
            verification_name: '齐鑫磊'
          },
          {
            collect_time: '2019-11-01 18:31:07',
            collect_way: 1,
            community_id: 1,
            community_name: '企鹅智家测试社区',
            created_at: '2019-10-15 17:29:02',
            depositor_id: 1,
            id: 1,
            name: '快递',
            recipients_address: null,
            recipients_mobile: '18654889732',
            recipients_name: '李俊',
            remark: null,
            state: 2,
            updated_at: '2019-11-01 18:31:07',
            verification_id: 20,
            verification_mobile: '15620003819',
            verification_name: '齐鑫磊'
          },
          {
            collect_time: '2019-11-01 18:31:07',
            collect_way: 1,
            community_id: 1,
            community_name: '企鹅智家测试社区',
            created_at: '2019-10-15 17:29:02',
            depositor_id: 1,
            id: 1,
            name: '快递',
            recipients_address: null,
            recipients_mobile: '18654889732',
            recipients_name: '李俊',
            remark: null,
            state: 2,
            updated_at: '2019-11-01 18:31:07',
            verification_id: 20,
            verification_mobile: '15620003819',
            verification_name: '齐鑫磊'
          }
        ],
        meta: {
          pagination: {
            count: 5,
            current_page: 1,
            per_page: 5,
            total: 0,
            total_pages: 10
          }
        }
      } */

/*
      const { zhangchao } = payload

      const response1 = {
        data: [
          {
            collect_time: '2019-11-01 18:31:07',
            collect_way: 1,
            community_id: 1,
            community_name: '企鹅智家测试社区',
            created_at: '2019-10-15 17:29:02',
            depositor_id: 1,
            id: 1,
            name: '快递',
            recipients_address: null,
            recipients_mobile: '18654889732',
            recipients_name: '李俊',
            remark: null,
            state: 2,
            updated_at: '2019-11-01 18:31:07',
            verification_id: 20,
            verification_mobile: '15620003819',
            verification_name: '齐鑫磊'
          },
          {
            collect_time: '2019-11-01 18:31:07',
            collect_way: 1,
            community_id: 1,
            community_name: '企鹅智家测试社区',
            created_at: '2019-10-15 17:29:02',
            depositor_id: 1,
            id: 1,
            name: '快递',
            recipients_address: null,
            recipients_mobile: '18654889732',
            recipients_name: '李俊',
            remark: null,
            state: 2,
            updated_at: '2019-11-01 18:31:07',
            verification_id: 20,
            verification_mobile: '15620003819',
            verification_name: '齐鑫磊'
          },
          {
            collect_time: '2019-11-01 18:31:07',
            collect_way: 1,
            community_id: 1,
            community_name: '企鹅智家测试社区',
            created_at: '2019-10-15 17:29:02',
            depositor_id: 1,
            id: 1,
            name: '快递',
            recipients_address: null,
            recipients_mobile: '18654889732',
            recipients_name: '李俊',
            remark: null,
            state: 2,
            updated_at: '2019-11-01 18:31:07',
            verification_id: 20,
            verification_mobile: '15620003819',
            verification_name: '齐鑫磊'
          }
        ],
        meta: {
          pagination: {
            count: 5,
            current_page: 1,
            per_page: 5,
            total: 0,
            total_pages: 10
          }
        }
      }

      const response = zhangchao
        ? response1
        : {
            data: [],
            meta: {
              pagination: {
                count: 0,
                current_page: 0,
                per_page: 0,
                total: 0,
                total_pages: 0
              }
            }
          }
      */
