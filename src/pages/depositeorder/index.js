import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker, Image } from '@tarojs/components'
import { AtButton, AtForm, AtInput, AtToast } from 'taro-ui'
import './index.scss'
import bannerPic from '../../images/express/banner@2x.png'

import Request from '../../utils/request'

@connect(({ deposit }) => ({
  ...deposit
}))
export default class Home extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '寄存订单'
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
        <View class="cu-bar bg-white margin-top solid-bottom">
          <View class="action">
            <Text class="cuIcon-title text-orange"></Text> 平分
        </View>
        </View>
        <ScrollView scroll-x class="bg-white nav">
          <View class="flex text-center">
            <View class="cu-item flex-sub {{index==TabCur?'text-orange cur':''}}" bindtap="tabSelect" >
              Tab
            </View>
          </View>
        </ScrollView>
      </View >
    )
  }

}
