import Request from '../utils/request'

// eslint-disable-next-line import/prefer-default-export
export const deposit = data =>
  Request({
    url: `/depositor/check-in`,
    method: 'POST',
    data
  })
