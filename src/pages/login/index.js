/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import MyButton from '../../components/MyButton'
import { authReLaunch } from '../../utils/index'

import './index.scss'

import ModalLogin from '../../components/ModalLogin/index.js'

export default class Index extends Component {
  static defaultProps = {
    isShow: false
  }

  state = { showLogin: false }

  cancel() {
    this.setState({ showLogin: false })
  }

  config = {
    navigationBarTitleText: '授权登录',
    usingComponents: {
      ModalLogin: '../../components/LoadingMore/index' // 书写第三方组件的相对路径
    }
  }

  toGiveForce() {
    /* console.log(1) */
    this.setState({
      showLogin: true
    }) &&
      authReLaunch({
        path: '/pages/index/index',
        failCb: () => this.setState({ showLogin: true })
      })

    /* authReLaunch({
      path: '/pages/index/index',
      failCb: () => this.setState({ showLogin: true })
    }) */
  }

  render() {
    return (
      <View className='login-wrap'>
        <View className='ModalLogin'>
          <ModalLogin
            isShow={this.state.showLogin}
            onCancel={this.cancel.bind(this)}
          ></ModalLogin>
          <View className='at-col'>
            <MyButton
              onClickProp={this.toGiveForce.bind(this)}
              name='点击授权登录'
              width='161'
              height='40'
              background='orange'
            ></MyButton>
          </View>
        </View>
      </View>
    )
  }
}
