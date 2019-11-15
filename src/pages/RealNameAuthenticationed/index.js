import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker, Image } from '@tarojs/components'
import { AtButton, AtForm, AtInput, AtToast } from 'taro-ui'
import './index.scss'
import avatarPic from '../../images/express/5P12UEPFHAZDSX9T.png'
import shapePic from '../../images/express/Shape@2x.png'
import renzhengPic from '../../images/express/yirenzheng-3@3x.png'

import Request from '../../utils/request'

@connect(({ deposit }) => ({
  ...deposit
}))
export default class Home extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '实名认证'
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
        <View className='success_card'>
          <View className='success_top'>
            <View className='success_card_avatar'><Image src={avatarPic} /></View>
            <View className='success_card_info'>
              <View className='success_card_info_name'><Text>SteenvenMiller</Text></View>
              <View className='success_card_info_idnumber'><Text>3***************0</Text></View>
            </View>
          </View>
          <View className='success_botom'>
            <View className='success_botom_img' ><Image style={'width:18px;height:18px;margin-top:3px;margin-right:4px;'} src={shapePic} /></View>
            <View className='success_botom_desc'>个人隐私安全保障中</View>
          </View>
          <View className='success_card_pic'><Image src={renzhengPic} /></View>
        </View>
      </View>
    )
  }

}
