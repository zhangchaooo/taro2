import Taro from '@tarojs/taro'
import { getCheckList, gettopInfo, getCheckList2 } from '../_service/check'

export default {
  namespace: 'check',
  state: {
    res: [1],
    checkList: { list: [] },
    avatarUrl: ''
  },

  effects: {
    *getCheckList({ payload = {}, callback }, { call, put, select }) {
      /* console.log('check_payload', payload) */
      let response = yield call(getCheckList, payload)

      /* if (zhangchao) response = response1 */
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
/*

     --------------------------------
     */
/* const { zhangchao } = payload

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
            recipients_name: '李俊1',
            remark: null,
            state: 1,
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
            recipients_name: '李俊1',
            remark: null,
            state: 1,
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
            recipients_name: '李俊1',
            remark: null,
            state: 1,
            updated_at: '2019-11-01 18:31:07',
            verification_id: 20,
            verification_mobile: '15620003819',
            verification_name: '齐鑫磊'
          }
        ],
        meta: {
          pagination: {
            count: 1,
            current_page: 1,
            per_page: 3,
            total: 3,
            total_pages: 1
          }
        }
      }
      const response2 = {
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
            recipients_name: '李俊2',
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
            recipients_name: '李俊2',
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
            recipients_name: '李俊2',
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
            count: 1,
            current_page: 1,
            per_page: 3,
            total: 3,
            total_pages: 1
          }
        }
      }
      const response3 = {
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
            recipients_name: '李俊3',
            remark: null,
            state: 3,
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
            recipients_name: '李俊3',
            remark: null,
            state: 3,
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
            recipients_name: '李俊3',
            remark: null,
            state: 3,
            updated_at: '2019-11-01 18:31:07',
            verification_id: 20,
            verification_mobile: '15620003819',
            verification_name: '齐鑫磊'
          }
        ],
        meta: {
          pagination: {
            count: 1,
            current_page: 1,
            per_page: 3,
            total: 3,
            total_pages: 1
          }
        }
      }
      const responseAll = {
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
            recipients_name: '李俊0',
            remark: null,
            state: 3,
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
            recipients_name: '李俊0',
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
            recipients_name: '李俊0',
            remark: null,
            state: 1,
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
            recipients_name: '李俊0',
            remark: null,
            state: 1,
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
            recipients_name: '李俊0',
            remark: null,
            state: 1,
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
            recipients_name: '李俊0',
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
            recipients_name: '李俊0',
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
            recipients_name: '李俊0',
            remark: null,
            state: 3,
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
            recipients_name: '李俊0',
            remark: null,
            state: 3,
            updated_at: '2019-11-01 18:31:07',
            verification_id: 20,
            verification_mobile: '15620003819',
            verification_name: '齐鑫磊'
          }
        ],
        meta: {
          pagination: {
            count: 1,
            current_page: 1,
            per_page: 3,
            total: 9,
            total_pages: 3
          }
        }
      }
      console.log('check_zhangchao', zhangchao)
      const response =
        zhangchao === 0
          ? responseAll
          : zhangchao === 1
          ? response1
          : zhangchao === 2
          ? response2
          : zhangchao === 3
          ? response3
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
            } */
