import Request from '../utils/request'

// eslint-disable-next-line import/prefer-default-export
export const getPersonalInfo = ({ payload }) => {
  console.log(payload)
  return Request({
    url:
      '/depositor/check-list?page=' + payload.page + '&limit=' + payload.limit,
    method: 'GET'
  })
}
export const getNewPersonalInfo = ({ payload }) => {
  console.log('new =>', payload)
  return Request({
    url:
      '/depositor/check-list?page=' + payload.page + '&limit=' + payload.limit,
    method: 'GET'
  })
}
