import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtTabs, AtTabsPane } from 'taro-ui'
import './index.scss'

/* import "~taro-ui/dist/style/components/avatar.scss" */

@connect(({ userInfo }) => ({
  ...userInfo
}))
export default class UserInfo extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '用户信息页面'
  }
  state = {
    selector: ['男', '女'],
    current: 0
  }
  handleChange(value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }
  toPersonal = () => {
    Taro.navigateTo({
      url: '/pages/personal/index'
    })
  }
  getPersonalInfo = () => {
    this.props.dispatch({
      type: 'userInfo/getPersonalInfo'
    })
    /* console.log('go') */
  }

  componentWillMount() {}

  componentDidMount() {
    this.getPersonalInfo()
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const tabList = [
      { title: '全部' },
      { title: '代取件' },
      { title: '已取件' },
      { title: '已逾期' }
    ]
    return (
      <View className='index'>
        {/* <Text className='text' onClick={this.toHome}>
          Hello world!
        </Text> */}
        <View className='top'>
          <AtAvatar circle className='image'></AtAvatar>
          <View className='info-wrap'>
            <View className='top-info item item1'>
              <View className='top-info-name item item1'>
                <View className='btn-max-y'>
                  <Text>橘右京</Text>
                </View>
                <View size='25' className='at-icon at-icon-heart'></View>
              </View>
              <View className='top-info-number item item2'>
                <View className='btn-max-y'>
                  <Text>130653198632111901</Text>
                </View>
              </View>
            </View>
            <View
              className='top-icon item item2'
              onClick={this.toPersonal.bind(this)}
            >
              <View size='25' className='at-icon at-icon-chevron-right'></View>
            </View>
          </View>
        </View>
        <View className='TabsWrap'>
          <AtTabs
            current={this.state.current}
            tabList={tabList}
            onClick={this.handleClick.bind(this)}
          >
            <AtTabsPane current={this.state.current} index={0}>
              <View style='background-color: #FAFBFC;text-align: center;'>
                <View className='anyone-info-wrap'>
                  <View className='tel-number-series item item1'>
                    <View className='username-telephone-wrap'>
                      <View className='username align'>娜可露露: </View>
                      <View className='telephone align tel'>13636925632</View>
                    </View>
                    <View className='durtime-wrap'>
                      <View className='username align'>寄存时间：</View>
                      <View className='telephone align'>2019-10-1 14:41</View>
                    </View>
                    <View className='series-wrap'>
                      <View className='username align'>寄存物品：</View>
                      <View className='telephone align'>快递</View>
                    </View>
                  </View>
                  <View className='status-wrap item item2'>
                    <View className='status align'>待领取</View>
                  </View>
                </View>
                <View className='anyone-info-wrap'>
                  <View className='tel-number-series item item1'>
                    <View className='username-telephone-wrap'>
                      <View className='username align'>娜可露露: </View>
                      <View className='telephone align tel'>13636925632</View>
                    </View>
                    <View className='durtime-wrap'>
                      <View className='username align'>寄存时间：</View>
                      <View className='telephone align'>2019-10-1 14:41</View>
                    </View>
                    <View className='series-wrap'>
                      <View className='username align'>寄存物品：</View>
                      <View className='telephone align'>快递</View>
                    </View>
                  </View>
                  <View className='status-wrap item item2'>
                    <View className='status align'>待领取</View>
                  </View>
                </View>
                <View className='anyone-info-wrap'>
                  <View className='tel-number-series item item1'>
                    <View className='username-telephone-wrap'>
                      <View className='username align'>娜可露露: </View>
                      <View className='telephone align tel'>13636925632</View>
                    </View>
                    <View className='durtime-wrap'>
                      <View className='username align'>寄存时间：</View>
                      <View className='telephone align'>2019-10-1 14:41</View>
                    </View>
                    <View className='series-wrap'>
                      <View className='username align'>寄存物品：</View>
                      <View className='telephone align'>快递</View>
                    </View>
                  </View>
                  <View className='status-wrap item item2'>
                    <View className='status align'>待领取</View>
                  </View>
                </View>
                <View className='anyone-info-wrap'>
                  <View className='tel-number-series item item1'>
                    <View className='username-telephone-wrap'>
                      <View className='username align'>娜可露露: </View>
                      <View className='telephone align tel'>13636925632</View>
                    </View>
                    <View className='durtime-wrap'>
                      <View className='username align'>寄存时间：</View>
                      <View className='telephone align'>2019-10-1 14:41</View>
                    </View>
                    <View className='series-wrap'>
                      <View className='username align'>寄存物品：</View>
                      <View className='telephone align'>快递</View>
                    </View>
                  </View>
                  <View className='status-wrap item item2'>
                    <View className='status align'>待领取</View>
                  </View>
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              <View style='background-color: #FAFBFC;text-align: center;'>
                <View className='anyone-info-wrap'>
                  <View className='tel-number-series item item1'>
                    <View className='username-telephone-wrap'>
                      <View className='username align'>娜可露露: </View>
                      <View className='telephone align tel'>13636925632</View>
                    </View>
                    <View className='durtime-wrap'>
                      <View className='username align'>寄存时间：</View>
                      <View className='telephone align'>2019-10-1 14:41</View>
                    </View>
                    <View className='series-wrap'>
                      <View className='username align'>寄存物品：</View>
                      <View className='telephone align'>快递</View>
                    </View>
                  </View>
                  <View className='status-wrap item item2'>
                    <View className='status align'>待领取</View>
                  </View>
                </View>
                <View className='anyone-info-wrap'>
                  <View className='tel-number-series item item1'>
                    <View className='username-telephone-wrap'>
                      <View className='username align '>娜可露露: </View>
                      <View className='telephone tel'>13636925632</View>
                    </View>
                    <View className='durtime-wrap'>
                      <View className='username align'>寄存时间：</View>
                      <View className='telephone'>2019-10-1 14:41</View>
                    </View>
                    <View className='series-wrap'>
                      <View className='username align'>寄存物品：</View>
                      <View className='telephone align'>快递</View>
                    </View>
                  </View>
                  <View className='status-wrap item item2'>
                    <View className='status align'>待领取</View>
                  </View>
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={2}>
              <View style='background-color: #FAFBFC;text-align: center;'>
                <View className='anyone-info-wrap'>
                  <View className='tel-number-series item item1'>
                    <View className='username-telephone-wrap'>
                      <View className='username align'>娜可露露: </View>
                      <View className='telephone align tel'>13636925632</View>
                    </View>
                    <View className='durtime-wrap'>
                      <View className='username align'>寄存时间：</View>
                      <View className='telephone align'>2019-10-1 14:41</View>
                    </View>
                    <View className='series-wrap'>
                      <View className='username align'>寄存物品：</View>
                      <View className='telephone align'>快递</View>
                    </View>
                  </View>
                  <View className='status-wrap item item2'>
                    <View className='status align'>待领取</View>
                  </View>
                </View>
                <View className='anyone-info-wrap'>
                  <View className='tel-number-series item item1'>
                    <View className='username-telephone-wrap'>
                      <View className='username align '>娜可露露: </View>
                      <View className='telephone tel'>13636925632</View>
                    </View>
                    <View className='durtime-wrap'>
                      <View className='username align'>寄存时间：</View>
                      <View className='telephone'>2019-10-1 14:41</View>
                    </View>
                    <View className='series-wrap'>
                      <View className='username align'>寄存物品：</View>
                      <View className='telephone align'>快递</View>
                    </View>
                  </View>
                  <View className='status-wrap item item2'>
                    <View className='status align'>待领取</View>
                  </View>
                </View>
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={3}>
              <View style='background-color: #FAFBFC;text-align: center;'>
                <View className='anyone-info-wrap'>
                  <View className='tel-number-series item item1'>
                    <View className='username-telephone-wrap'>
                      <View className='username align'>娜可露露: </View>
                      <View className='telephone align tel'>13636925632</View>
                    </View>
                    <View className='durtime-wrap'>
                      <View className='username align'>寄存时间：</View>
                      <View className='telephone align'>2019-10-1 14:41</View>
                    </View>
                    <View className='series-wrap'>
                      <View className='username align'>寄存物品：</View>
                      <View className='telephone align'>快递</View>
                    </View>
                  </View>
                  <View className='status-wrap item item2'>
                    <View className='status align'>待领取</View>
                  </View>
                </View>
                <View className='anyone-info-wrap'>
                  <View className='tel-number-series item item1'>
                    <View className='username-telephone-wrap'>
                      <View className='username align '>娜可露露: </View>
                      <View className='telephone tel'>13636925632</View>
                    </View>
                    <View className='durtime-wrap'>
                      <View className='username align'>寄存时间：</View>
                      <View className='telephone'>2019-10-1 14:41</View>
                    </View>
                    <View className='series-wrap'>
                      <View className='username align'>寄存物品：</View>
                      <View className='telephone align'>快递</View>
                    </View>
                  </View>
                  <View className='status-wrap item item2'>
                    <View className='status align'>待领取</View>
                  </View>
                </View>
              </View>
            </AtTabsPane>
          </AtTabs>
        </View>
        {/* <View>
          <View size='55' className='at-icon at-icon-heart add'></View>
        </View> */}
      </View>
    )
  }
}
