import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker, Image } from '@tarojs/components'
import { AtButton, AtForm, AtInput, AtToast } from 'taro-ui'
import './index.scss'
import OnePic from '../../images/express/Rectangle Copy 28@3x.png'
import TwoPic from '../../images/express/Rectangle Copy 9@3x.png'
import OpenPic from '../../images/express/Combined Shape@3x.png'
import ItemTwoPic from '../../images/express/Rectangle@3x.png'
import ItemOnePic from '../../images/express/Rectangle Copy@3x.png'
import ItemTherePic from '../../images/express/Rectangle Copy 3@3x.png'
import ItemFourPic from '../../images/express/Rectangle Copy 2@3x.png'
import ItemFivePic from '../../images/express/Rectangle Copy 5@2x.png'
import ItemSixPic from '../../images/express/Rectangle Copy 4@3x.png'
import ItemSevenPic from '../../images/express/Rectangle Copy 7@3x.png'
import ShutUpPic from '../../images/express/copy@3x.png'
import LogoPic from '../../images/express/jinling@3.png'

import Request from '../../utils/request'

@connect(({ deposit }) => ({
  ...deposit
}))
export default class Home extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '分享'
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
        <View className='title'>
          <Text>来自加班狗的帖子</Text>
        </View>
        <View className='position'>
          <View className='position_time'>
            <View className='position_time_one'><Text >2019-04-20</Text></View>
            <View className='position_time_two'><Text >加班狗</Text></View>
          </View>
          <View className='position_name'>
            <Text>金瓴</Text>
          </View>
        </View>
        <View className='article_text'>
          <Text>都下班了，而我依然加班中…Going on～</Text>
        </View>
        <View className='pic_one'>
          <Image src={OnePic}></Image>
        </View>
        <View className='pic_two'>
          <Image src={TwoPic}></Image>
        </View>
        <View className='open_app'>
          <View className='open_app_image'>
            <Image src={OpenPic}></Image>
          </View>
          <View className='open_app_text'>
            <Text>打开金瓴客户端，开启智在生活</Text>
          </View>
        </View>
        <View className='one_word'>
          <View className='one_word_wrap'>
            <Text>这是一句话</Text>
          </View>
        </View>
        <View className='like'>
          <View className='like_wrap'>
            <View className='like_o'>
              <Text>喜欢</Text>
            </View>
          </View>
        </View>
        <View className='like_number'>
          <View className='like_number_wrap'>
            <Text>18902 人喜欢</Text>
          </View>
        </View>
        <View className='mini_avatar_wrap'>
          <View className='mini_avatar_innerwrap'>
            <Image src={ItemOnePic}></Image>
            <Image src={ItemTwoPic}></Image>
            <Image src={ItemTherePic}></Image>
            <Image src={ItemFourPic}></Image>
            <Image src={ItemFivePic}></Image>
            <Image src={ItemSixPic}></Image>
            <Image src={ItemSevenPic}></Image>
            <Image src={ItemSixPic}></Image>
          </View>
        </View>
        <View className='bottom_info_wrap'>
          <Image className='close' src={ShutUpPic}></Image>
          <Image className='logo' src={LogoPic}></Image>
          <Text className='life'>金瓴，智在生活</Text>
          <View className='open_btn'>
            <Text className='open_btn_text'>打开APP</Text>
          </View>
        </View>

      </View>
    )
  }

}
