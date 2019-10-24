import Request from '../utils/request'

// eslint-disable-next-line import/prefer-default-export
export const userRegister = data =>
  Request({
    url: `/depositor/update`,
    method: 'POST',
    data
  })
export const getMyAvatar = data =>
  Request({
    url: `/depositor/show`,
    method: 'GET',
    data
  })
