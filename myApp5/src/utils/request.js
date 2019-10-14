import Taro from '@tarojs/taro'
import { baseUrl } from '../config'

export default (options = { method: 'GET', data: {} }) => {
  Taro.setStorageSync('access_token', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMC4wLjAuNlwvZXhwcmVzc1wvbWluaVwvdGVzdC1sb2dpbiIsImlhdCI6MTU3MTA0MjcwOCwiZXhwIjoxNTc0MDQyNzA4LCJuYmYiOjE1NzEwNDI3MDgsImp0aSI6ImZJUEllOHFHSER3TWFkUnYiLCJzdWIiOjEsInBydiI6IjY1NjdkNTQ2YjU5M2RlNzRjMGIyZDU0YzdhMGMyOGEwMzY0M2Q0N2QiLCJndWFyZCI6InVzZXIifQ.DpeR84LL1pR9zMChSDObs9r0RQN5AxJztYQEkcjSwdg")
  const access_token = Taro.getStorageSync('access_token')
  return Taro.request({
    url: baseUrl + options.url,
    data: options.data,
    header: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`
    },
    method: options.method.toUpperCase()
  }).then(res => {
    const { statusCode, data } = res

    if (res.header.Authorization) {
      Taro.setStorageSync(
        'access_token',
        res.header.Authorization.split(' ')[1]
      )
    }

    if (statusCode === 500) {
      Taro.showToast({ title: '服务器出错了！', icon: 'none' })
    }
    if (statusCode === 429) {
      Taro.showToast({ title: `请求次数过多，请稍后再试`, icon: 'none' })
    }

    switch (data.code) {
      case 401: {
        if (Taro.getStorageSync('access_token')) {
          Taro.removeStorageSync('access_token')
          Taro.showToast({ title: `登陆已过期，请重新登录`, icon: 'none' })
        }
        // var pages = Taro.getCurrentPages();
        // const url = pages[pages.length-1].route;
        // if (url !== 'pages/index/index') {
        //   Taro.navigateTo({ url: '/pages/index/index' })
        // }
        return data
      }
    }

    return data
  })
}
