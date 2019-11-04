import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker } from '@tarojs/components'
import { AtButton, AtAvatar, AtForm, AtInput, AtImagePicker } from 'taro-ui'
import Request from '../../utils/request'

import './index.scss'

@connect(({ listPage }) => ({
  ...listPage
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '列表分页页面'
  }
  constructor() {
    super(...arguments)
  }
  state = {}

  componentDidMount() {}

  render() {
    return <View className='index'>listPage</View>
  }

  toHome() {
    Taro.navigateTo({
      url: '/pages/home/index'
    })
  }
}
