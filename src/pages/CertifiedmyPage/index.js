import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker, Image } from '@tarojs/components'
import { AtButton, AtForm, AtInput, AtToast } from 'taro-ui'
import './index.scss'
import bannerPic from '../../images/express/banner@2x.png'
import mengbanPic from '../../images/express/mengban3.png'
import avatar from '../../images/express/5P12UEPFHAZDSX9T.png'
import ArrowRight from '../../images/express/copy 7@2x.png'

import Request from '../../utils/request'

@connect(({ deposit }) => ({
  ...deposit
}))
export default class Home extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '我的'
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
        <View className='image_wrap'>
          <Image
            style='width: 100%;'
            src={mengbanPic}
          />
        </View>
        <View className='whitezone'>
          <View className='whitezone_text'>
            <Text>SteevenMiller</Text>
          </View>
        </View>
        <View className='avatar_wrap'><Image src={avatar} /></View>
        <View className='telephone_wrap'>
          <View className='telephone_wrap_one'>
            <Text>绑定手机</Text>
          </View>
          <View className='telephone_wrap_two'>
            <Text>19329157564</Text>
          </View>
          <View className='telephone_wrap_three'>
            <Image
              src={ArrowRight}
            />
          </View>
        </View>
        <View className='bottom_line'></View>
        <View className='Real_name_authentication'>
          <View className='Real_name_authentication_one'>
            <Text>实名认证</Text>
          </View>
          <View className='Real_name_authentication_two'>
            <Text>已认证</Text>
          </View>
          <View className='Real_name_authentication_three'>
            <Image
              src={ArrowRight}
            />
          </View>
        </View>
        <View className='bottom_line'></View>
      </View>
    )
  }

}
