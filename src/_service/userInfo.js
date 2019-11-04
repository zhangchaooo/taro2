import Request from '../utils/request'

export const getUserInfo = () => {
  /* console.log('top go =>') */
  return Request({
    url: '/depositor/show',
    method: 'GET'
  })
}
