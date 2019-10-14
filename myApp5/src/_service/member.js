import Request from '../utils/request'

// eslint-disable-next-line import/prefer-default-export
export const login = data =>
  Request({
    url: `/login`,
    method: 'POST',
    data
  })
