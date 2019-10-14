import { Provider } from '@tarojs/redux'
import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import dva from './utils/dva'
import models from './_models'

import './app.scss'
import './custom-variables.scss'

const dvaApp = dva.createApp({
  initialState: {},
  models: models
})
const store = dvaApp.getStore()

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: [
      'pages/index/index',
      'pages/home/index',
      'pages/success/index',
      'pages/userInfo/index',
      'pages/personal/index',
      'pages/login/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index className='index' />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
