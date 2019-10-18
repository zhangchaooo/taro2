/* eslint-disable react/no-unused-state */
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
    navigationBarTitleText: '用户信息页面',
    onReachBottomDistance: 50
  }
  state = {
    selector: ['男', '女'],
    projectState: ['未取件', '已取件', '已逾期'],
    page: 1,
    limit: 6
    // eslint-disable-next-line taro/duplicate-name-of-state-and-props
  }
  toPersonal = () => {
    Taro.navigateTo({
      url: '/pages/personal/index'
    })
  }
  getPersonalInfo = (page, limit) => {
    this.props.dispatch({
      type: 'userInfo/getPersonalInfo',
      payload: {
        page,
        limit
      }
    })
  }
  getNewPersonalInfo = (page, limit) => {
    this.props.dispatch({
      type: 'userInfo/getNewPersonalInfo',
      payload: {
        page,
        limit
      }
    })
  }
  onReachBottom() {
    console.log('距离底部不远了')
    const page = Number(this.state.page) + 1
    const limit = this.state.limit
    console.log(page, limit)

    this.getNewPersonalInfo(page, limit)
  }

  componentDidMount() {
    const page = this.state.page
    const limit = this.state.limit
    this.getPersonalInfo(page, limit)
  }

  render() {
    const tabList = [
      { title: '全部' },
      { title: '待取件' },
      { title: '已取件' },
      { title: '已逾期' }
    ]
    const awaitExpress = this.props.res.filter(item => item.state === 1)
    const geted = this.props.res.filter(item => item.state === 2)
    const overTime = this.props.res.filter(item => item.state === 3)
    return (
      <View className='index'>
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
          <AtTabs current={this.state.current} tabList={tabList}>
            <AtTabsPane current={this.state.current} index={0}>
              <View style='background-color: #FAFBFC;text-align: center;'>
                {/* for (let index = 0; index < res.length; index++) {
                  const element = array[index];

                } */}
                {this.props.res.map(item => {
                  return (
                    <View className='anyone-info-wrap' key={item.id}>
                      <View className='tel-number-series item item1'>
                        <View className='username-telephone-wrap'>
                          <View className='username align'>
                            {item.recipients_name}:
                          </View>
                          <View className='telephone align tel'>
                            {item.recipients_mobile}
                          </View>
                        </View>
                        <View className='durtime-wrap'>
                          <View className='username align'>寄存时间：</View>
                          <View className='telephone align'>
                            {item.created_at}
                          </View>
                        </View>
                        <View className='series-wrap'>
                          <View className='username align'>寄存物品：</View>
                          <View className='telephone align'>{item.name}</View>
                        </View>
                      </View>
                      <View className='status-wrap item item2'>
                        <View className='status align'>
                          {this.state.projectState[item.state - 1]}
                        </View>
                      </View>
                    </View>
                  )
                })}
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              <View style='background-color: #FAFBFC;text-align: center;'>
                {awaitExpress.map(item => {
                  return (
                    <View className='anyone-info-wrap' key='item.id'>
                      <View className='tel-number-series item item1'>
                        <View className='username-telephone-wrap'>
                          <View className='username align'>
                            {item.recipients_name}:
                          </View>
                          <View className='telephone align tel'>
                            {item.recipients_mobile}
                          </View>
                        </View>
                        <View className='durtime-wrap'>
                          <View className='username align'>寄存时间：</View>
                          <View className='telephone align'>
                            {item.created_at}
                          </View>
                        </View>
                        <View className='series-wrap'>
                          <View className='username align'>寄存物品：</View>
                          <View className='telephone align'>{item.name}</View>
                        </View>
                      </View>
                      <View className='status-wrap item item2'>
                        <View className='status align'>
                          {this.state.projectState[item.state - 1]}
                        </View>
                      </View>
                    </View>
                  )
                })}
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={2}>
              {geted.map(item => {
                return (
                  <View className='anyone-info-wrap' key='item.id'>
                    <View className='tel-number-series item item1'>
                      <View className='username-telephone-wrap'>
                        <View className='username align'>
                          {item.recipients_name}:
                        </View>
                        <View className='telephone align tel'>
                          {item.recipients_mobile}
                        </View>
                      </View>
                      <View className='durtime-wrap'>
                        <View className='username align'>寄存时间：</View>
                        <View className='telephone align'>
                          {item.created_at}
                        </View>
                      </View>
                      <View className='series-wrap'>
                        <View className='username align'>寄存物品：</View>
                        <View className='telephone align'>{item.name}</View>
                      </View>
                    </View>
                    <View className='status-wrap item item2'>
                      <View className='status align'>
                        {this.state.projectState[item.state - 1]}
                      </View>
                    </View>
                  </View>
                )
              })}
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={3}>
              <View style='background-color: #FAFBFC;text-align: center;'>
                {overTime.map(item => {
                  return (
                    <View className='anyone-info-wrap' key='item.id'>
                      <View className='tel-number-series item item1'>
                        <View className='username-telephone-wrap'>
                          <View className='username align'>
                            {item.recipients_name}:
                          </View>
                          <View className='telephone align tel'>
                            {item.recipients_mobile}
                          </View>
                        </View>
                        <View className='durtime-wrap'>
                          <View className='username align'>寄存时间：</View>
                          <View className='telephone align'>
                            {item.created_at}
                          </View>
                        </View>
                        <View className='series-wrap'>
                          <View className='username align'>寄存物品：</View>
                          <View className='telephone align'>{item.name}</View>
                        </View>
                      </View>
                      <View className='status-wrap item item2'>
                        <View className='status align'>
                          {this.state.projectState[item.state - 1]}
                        </View>
                      </View>
                    </View>
                  )
                })}
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
