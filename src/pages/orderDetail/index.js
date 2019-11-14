import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker, Image } from '@tarojs/components'
import { AtButton, AtAvatar, AtForm, AtInput, AtImagePicker } from 'taro-ui'
import Request from '../../utils/request'
import TopSuccess from '../../images/express/Group-2@3x.png'

import './index.scss'

@connect(({ listPage }) => ({
  ...listPage
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '订单详情'
  }
  constructor() {
    super(...arguments)
  }
  state = {}

  componentDidMount () { }

  render () {
    return <View className='index'>
      <Image
        style='width: 200px;height: 128px;'
        src={TopSuccess}
      />
    </View>
  }

  toHome () {
    Taro.navigateTo({
      url: '/pages/home/index'
    })
  }
}
