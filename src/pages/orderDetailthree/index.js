import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker, Image } from '@tarojs/components'
import { AtButton, AtAvatar, AtForm, AtInput, AtImagePicker } from 'taro-ui'
import Request from '../../utils/request'
import TopSuccess from '../../images/express/Group@3x.png'

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
          <View className='topWrap'>
            <View className='image_wrap'>
              <Image
                style='width: 180px;height: 108px;'
                src={TopSuccess}
              />
            </View>
            <View className='text_wrap'>
              <View className='text_wrap_first'><Text>待取件</Text></View>
              <View className='text_wrap_second'><Text className='text_color'>请尽快取件</Text></View>
            </View>
          </View>
          <View className='bottomWrap'>
            <View className='text_wrap_first'><Text>订单信息</Text></View>
            <View className='text_wrap_second'><Text>姓名:</Text><Text className='text_wrap_two'>仲尼</Text></View>
            <View className='text_wrap_third'><Text>手机号码:</Text><Text className='text_wrap_two'> 19329178568</Text></View>
            <View className='text_wrap_fouth'><Text>寄存时间:</Text><Text className='text_wrap_two'>2019-04-04 13：00</Text></View>
            <View className='text_wrap_fifth'><Text>寄存物品:</Text><Text className='text_wrap_two'>快递</Text></View>
        </View>
      </View>

    }

  toHome () {
    Taro.navigateTo({
      url: '/pages/home/index'
    })
  }
}
