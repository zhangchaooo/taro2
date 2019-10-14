import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'
/* import "~taro-ui/dist/style/components/avatar.scss" */

export default class Success extends Component {
  config = {
    navigationBarTitleText: 'Success页面'
  }
  state = {
    selector: ['男', '女']
  }
  handleChange(value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }

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
        <AtButton className='btn-max-w' type='primary'>
          继续存件
        </AtButton>
        <AtButton className='btn-max-w white-color' type='primary'>
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
}
