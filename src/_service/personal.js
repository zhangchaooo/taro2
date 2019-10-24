import Request from '../utils/request'

// eslint-disable-next-line import/prefer-default-export
export const getInfo = () =>
  Request({
    url: `/depositor/show`,
    method: 'GET'
  })
