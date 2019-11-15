import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker, Image, Input } from '@tarojs/components'
import { AtButton, AtForm, AtInput, AtToast } from 'taro-ui'
import './index.scss'
import bannerPic from '../../images/express/banner@2x.png'
import positivePic from '../../images/express/upload1.png'
import reversePic from '../../images/express/upload2.png'
import circlePic from '../../images/express/circle.png'

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
        <View className='titleWrap'>
          <View className='title'>
            <Text>根据公安部要求，寄件需要实名认证，感谢配合</Text>
          </View>
        </View>
        <View className='desc'>
          <Text className='desc_one'>上传身份证</Text>
          <Text className='desc_two'>（请拍摄您的大陆身份证原件）</Text>
        </View>
        <View className='positivePicWrap'><Image src={positivePic} /></View>
        <View className='reversePicWrap'><Image src={reversePic} /></View>
        <View className='formWrap'>
          <View className='formWrap1'>
            <View className='formWrap_one'><Text>姓名</Text></View>
            <View className='formWrap_two'><Input placeholder='请输入姓名'></Input></View>
          </View>
          <View className='bottom_line'></View>
          <View className='formWrap2'>
            <View className='formWrap_one'><Text>身份证号</Text></View>
            <View className='formWrap_two'><Input placeholder='请输入证件号码'></Input></View>
          </View>
        </View>
        <View className='agree_desc'>
          <View className='agree_desc_circle'>
            <Image src={circlePic} />
          </View>
          <View className='agree_desc_text'>
            <View className='agree_desc_1'>同意</View>
            <View className='agree_desc_2'>《隐私权政策》</View>
          </View>
        </View>
        <View className='submission_btn'>
          <Button>提交</Button>
        </View>
      </View>
    )
  }

}
