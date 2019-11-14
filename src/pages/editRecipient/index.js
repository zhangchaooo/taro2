import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker, Image } from '@tarojs/components'
import { AtButton, AtForm, AtInput, AtToast } from 'taro-ui'
import './index.scss'
import bannerPic from '../../images/express/banner@2x.png'

import Request from '../../utils/request'
import { red } from '_ansi-colors@3.2.4@ansi-colors'

@connect(({ deposit }) => ({
  ...deposit
}))
export default class Home extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '编辑收件人'
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
        <AtForm className='atform'>
          <View className='atform_input_first'>
            <AtInput title='收件人姓名' placeholder="请输入收件人姓名"></AtInput>
          </View>
          <View className='atform_input_second'>
            <AtInput title='收件人电话' placeholder="请输入收件人电话"></AtInput>
          </View>
        </AtForm>
        <View type='primary' size='normal' className='Btn'><AtButton>确认</AtButton></View>
      </View>
    )
  }

}
