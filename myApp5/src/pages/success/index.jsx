import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'
/* import "~taro-ui/dist/style/components/avatar.scss" */

export default class Success extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'Success页面'
  }
  state = {}

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

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
          onClick={this.toUserInfo.bind(this)}
          className='btn-max-w white-color'
          type='primary'
        >
          寄存查询
        </AtButton>
      </View>
    )
  }

  toHome() {
    Taro.navigateTo({
      url: '/pages/home/index'
    })
  }

  toUserInfo() {
    Taro.navigateTo({
      url: '/pages/userInfo/index'
    })
  }
}
