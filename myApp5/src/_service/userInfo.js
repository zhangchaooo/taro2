import Request from '../utils/request'

// eslint-disable-next-line import/prefer-default-export
export const getPersonalInfo = () =>
  Request({
    url: `/depositor/show`,
    method: 'GET'
  })
