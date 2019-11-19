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
    navigationBarTitleText: '卡片页面'
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
        <View className='cardWrap'>
          <View className='cardWrap_one'>
            <View className='cardWrap_one_left'>
              <Text className='cardWrap_one_left_name'>仲尼</Text>
              <Text className='cardWrap_one_left_number'>13032598632</Text>
            </View>
            <Text className='cardWrap_one_right'>待领取</Text>
          </View>
          <View className='cardWrap_two'></View>
          <View className='cardWrap_three'>
            <Text className='cardWrap_three_key'>寄存时间：</Text>
            <Text className='cardWrap_three_value'>2019-04-07 13:00</Text>
          </View>
          <View className='cardWrap_four'>
            <Text className='cardWrap_three_key'>寄存物品：</Text>
            <Text className='cardWrap_three_value'>快递</Text>
          </View>
        </View>
      </View>
    )
  }

}
