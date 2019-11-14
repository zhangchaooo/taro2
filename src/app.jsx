import { Provider } from '@tarojs/redux'
import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import dva from './utils/dva'
import models from './_models'

import './app.scss'
import './styles/base.scss'
import './styles/common.scss'
import './custom-variables.scss'
import 'taro-icons/scss/Ionicons.scss'

const dvaApp = dva.createApp({
  initialState: {},
  models: models
})
const store = dvaApp.getStore()

class App extends Component {
  config = {
    pages: [
      'pages/expressHouse/index',
      'pages/deposite/index',
      'pages/editRecipient/index',
      'pages/userInfoModel/index',
      'pages/personal/index',
      'pages/index/index',
      'pages/home/index',
      'pages/success/index',
      'pages/login/index'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#FFAB0A',
      navigationBarTitleText: '快递屋',
      navigationBarTextStyle: 'white',
      backgroundColor: '#f1f1f1'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/expressHouse/index',
          text: '首页',
          iconPath: './images/express/首页 copy@2x.png',
          selectedIconPath: './images/express/首页 @2x.png'
        },
        {
          pagePath: 'pages/success/index',
          text: '我的',
          iconPath: './images/express/我的 @2x.png',
          selectedIconPath: './images/express/我的 copy@2x.png'
        }
      ],
      color: '#333',
      selectedColor: '#FFB018',
      backgroundColor: '#FFFFFF',
      borderStyle: 'white'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index className='index' />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
