import Taro from '@tarojs/taro'

export function loadList({
  _this,
  type,
  page,
  key,
  keyVal,
  cb,
  limit,
  isRows
} = {}) {
  const { dispatch } = _this.props

  dispatch({
    type,
    payload: keyVal
      ? {
          page: page || 1,
          sort: { id: 'desc' },
          [isRows ? 'rows' : 'limit']: limit || 10,
          [key]: keyVal
        }
      : {
          page: page || 1,
          sort: { id: 'desc' },
          [isRows ? 'rows' : 'limit']: limit || 10
        },
    callback: res => {
      if (!res.code) {
        console.log('loadList', res)
        /* console.log(res.data)
        console.log(res.meta.pagination) */

        cb && cb(res)

        const list = res.data
        const { total, current_page, per_page } = res.meta.pagination
        const dataNum =
          (current_page - 1) * per_page + (list ? list.length : data.length)

        _this.setState({
          loading: false,
          mLoading: false,
          noData: !total,
          noMore: dataNum >= total
        })
      }
    }
  })
}
