import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtIcon } from 'taro-ui'
/* import IconFont from '../../components/iconfont/weapp/weapp' */
import './index.scss'
/* import "~taro-ui/dist/style/components/avatar.scss" */

export default class Success extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '寄存成功'
  }
  state = {}

  render() {
    return (
      <View className='index'>
        {/* <Text className='text' onClick={this.toHome}>
          Hello world!
        </Text> */}
        <View size='25' className='at-icon at-icon-check-circle'></View>
        <View className='info'>
          <Text>寄存成功</Text>
        </View>
        <AtButton
          onClick={this.toHome.bind(this)}
          className='btn-max-w'
          type='primary'
        >
          继续存件
        </AtButton>
        <AtButton
          onClick={this.toUserInfoModel.bind(this)}
          className='btn-max-w white-color'
          type='primary'
        >
          寄存查询
        </AtButton>
        {/* <Text class='icon iconfont'>&#xe661;</Text> */}
      </View>
    )
  }

  toHome() {
    Taro.redirectTo({
      url: '/pages/home/index'
    })
  }

  toUserInfoModel() {
    Taro.redirectTo({
      url: '/pages/userInfoModel/index'
    })
  }
}
