import Request from '../utils/request'

export const getCheckList = data =>
  Request({
    url: '/depositor/check-list',
    method: 'GET',
    data
  })
export const getCheckList2 = data =>
  Request({
    url: '/depositor/check-list',
    method: 'GET',
    data
  })
export const gettopInfo = data =>
  Request({
    url: '/depositor/show',
    method: 'GET',
    data
  })

export const getNewPersonalInfo = ({ payload }) => {
  /* console.log('new =>', payload) */
  return Request({
    url:
      '/depositor/check-list?page=' +
      payload.page +
      '&limit=' +
      payload.limit +
      +'&state=' +
      payload.state,
    method: 'GET'
  })
}
