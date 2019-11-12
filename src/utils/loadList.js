import Taro from '@tarojs/taro'

export function loadList ({
  _this,
  type,
  page,
  key,
  keyVal,
  cb,
  limit,
  isRows,
  state
} = {}) {
  const { dispatch } = _this.props
  console.log('keyVal-------------------', keyVal) // null
  console.log('_this-------------------', _this) // 寄存列表
  console.log('type-------------------', type) // check/getCheckList
  console.log('page-------------------', page) // undefined
  console.log('key-------------------', key) // undefined
  console.log('keyVal-------------------', keyVal) // null
  console.log('cb-------------------', cb) // undefined
  console.log('limit-------------------', limit) // 5
  console.log('isRows-------------------', isRows) // undefined

  dispatch({
    type,
    payload: keyVal
      ? {
        page: page || 1,
        // sort: { id: 'desc' },
        [isRows ? 'rows' : 'limit']: limit || 5,
        state: state || '',
        /* [key]: keyVal */
      }
      : {
        page: page || 1,
        // sort: { id: 'desc' },
        [isRows ? 'rows' : 'limit']: limit || 5,
        state: state || '',
      },
    callback: res => {
      console.log('loadList_callback_res~~~~~~~~~~~~~~~~~~~~~~~', res)

      if (res.meta) {
        console.log('function_loadlist_res_meta', res)
        /* console.log(res.data)
        console.log(res.meta.pagination) */

        cb && cb(res)

        const list = res.data
        const { total, current_page, per_page } = res.meta.pagination
        const dataNum =
          (current_page - 1) * per_page + (list ? list.length : data.length)
        console.log('load_list_dataNum', dataNum)
        console.log(
          'total~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
          total
        )
        console.log(dataNum >= total)

        _this.setState({
          loading: false,
          mLoading: false,
          noData: !total,
          noMore: dataNum >= total,
          total: total
        })
      }
    }
  })
}
