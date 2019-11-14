/* eslint-disable react/no-unused-state */
/* eslint-disable taro/duplicate-name-of-state-and-props */
import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker, Image } from '@tarojs/components'
import { AtButton, AtForm, AtInput, AtToast } from 'taro-ui'
import './index.scss'
import bannerPic from '../../images/express/banner@2x.png'
import Path from '../../images/express/Path 3@3x.png'
import Arrow from '../../images/express/向下箭头 copy 7@2x.png'
import Record from '../../images/express/jilu-2 + Path Mask@2x.png'

import Request from '../../utils/request'

@connect(({ deposit }) => ({
  ...deposit
}))
export default class Home extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '快递之家'
  }

  state = {
    community_name: [],
  }

  constructor() { }


  componentDidMount () {
  }

  render () {
    return (
      <View className='index'>
        <View className='top_pic'>
          <Image
            style='width: 100%;'
            src={bannerPic}
          />
        </View>
        <View className='content'>
          <View className='my_deposit'>
            <View className='deposit_pic'>
              <Image
                style='width: 32px;height: 16px;'
                src={Path}
              />
            </View>
            <View className='my_deposit_desc'>
              <View className='my_deposit_desc_first'>我要寄存</View>
              <View className='my_deposit_desc_second'>方便、快捷、可靠</View>
            </View>
            <View className='my_deposit_arrow'>
              <Image
                style='width: 15px;height: 15px;'
                src={Arrow}
              />
            </View>
          </View>
          <View className='deposit_order'>
            <View className='deposit_pic'>
              <Image
                style='width: 32px;height: 32px;'
                src={Record}
              />
            </View>
            <View className='my_deposit_desc'>
              <View className='my_deposit_desc_first'>寄存订单</View>
              <View className='my_deposit_desc_second'>订单信息全掌握</View>
            </View>
            <View className='my_deposit_arrow'>
              <Image
                style='width: 15px;height: 15px;'
                src={Arrow}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }

  toHome () {
    Taro.navigateTo({
      url: '/pages/home/index'
    })
  }
}
