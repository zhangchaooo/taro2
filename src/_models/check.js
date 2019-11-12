import Taro from '@tarojs/taro'
import { getCheckList, gettopInfo, getCheckList2 } from '../_service/check'

export default {
  namespace: 'check',
  state: {
    stateCode: 1,
    res: [1],
    checkList: { list: [] },
    avatarUrl: '',
    meta: {
      pagination: {
        total: 1000
      }
    },

  },

  effects: {
    *getCheckList ({ payload = {}, callback }, { call, put, select }) {
      console.log('check_first_getlist_payload', payload) // { limit: 5, page: 1 }
      const { state } = payload
      console.log('state^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^', state);
      let stateCode = state

      let response = yield call(getCheckList, payload)
      let { meta } = response
      console.log('check_two_effets__getCheck_list_response_payload', payload) // { limit: 5, page: 1 }
      console.log('check_first_request_response', response) // { data:[],meta:{pagination:{total:8}} }
      if (meta) {
        yield put({
          type: 'savemeta',
          payload: {
            meta,
            state
          }
        })
      }

      if (response) {
        yield put({
          type: 'saveList',
          payload: {
            key: 'checkList',
            page: payload.page,
            /*  state: payload.state, */
            response,
            stateCode
            /* state_type: payload.state_type */
          }
        })
      }
      if (callback) callback(response)
    }
  },

  reducers: {
    save (state, { payload }) {
      /* console.log('pei', payload) */

      return { ...state, ...payload }
    },
    savemeta (state, { payload }) {
      /* console.log('pei', payload) */

      return { ...state, ...payload }
    },
    saveList (state, { payload }) {
      let { key, page, response, stateCode } = payload // key: checkList
      console.log('savelist_recieved_response', response)




      let { data } = response // call 新请求的 list数组
      let { meta } = response
      console.log('savelist_recieved_response_data', data)
      console.log('savelist_recieved_response_meta', meta)

      let _list = data
      console.log(
        'savelist_recieved_response_data_list----------------------------------',
        data
      )
      let { list } = state[key] //state里面的 list数组
      console.log('response-------------------------------------', response)
      console.log('list-------------------------------------', list)
      console.log('_list----------------------------------', _list)
      console.log('page----------------------------------', page)
      console.log('key----------------------------------', key)
      /* return */

      if (!_list) {
        // 新请求的数组不存在，没返回信息，  如果 page===1 : 返回空数组， page!==1 : 新的空数组 + state的list 数组
        console.log('_list undefined 不存在---------------------------')

        return {
          ...state,
          [key]:
            page === 1
              ? { ...response.data, list: _list }
              : { ...response.data, list: [...list, ..._list] }
        }
      }
      if (_list.length === 0) {
        console.log(
          '_list.length ===00000000000000000000000000000000000000000000000000000000'
        )
        return {
          ...state,
          [key]: page === 1 ? { list: [...list] } : { list: [..._list] }, stateCode
        }
      }
      //  请求并返回数据， checkList: page ===1 , list : 新的数据+ state 的 list
      console.log('_list 存在，请求到了数据--------------')

      /*  return {} */ return {
        ...state,
        [key]:
          page === 1
            ?
            { list: [..._list] }
            : { list: [...list, ..._list] }, stateCode
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

/* if (zhangchao) response = response1 */
/*   const responsetop = yield call(gettopInfo, payload) */

/* console.log('toptop is=>', responsetop) */
/* Taro.getUserInfo().then(res => {
        console.log('hahaha', res.userInfo.avatarUrl)
        const avatarUrl = res.userInfo.avatarUrl
        console.log('aaa', avatarUrl)
      }) */
/* const name = responsetop.depositor_wechat_user.name
      const head_image = responsetop.depositor_wechat_user.head_image
      const id_card = responsetop.depositor_wechat_user.id_card
      const sex = responsetop.depositor_wechat_user.sex */
/* console.log('sex is => ', sex) */

/* console.log('toptop', name, head_image, id_card) */

/*   yield put({
        type: 'save',
        payload: {
          name,
          head_image,
          id_card,
          sex
        }
      }) */
