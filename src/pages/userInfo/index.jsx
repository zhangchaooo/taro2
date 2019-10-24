import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import { AtAvatar, AtTabs, AtTabsPane } from 'taro-ui'
import withLoad from '../../utils/withLoad'
import Loading from '../../components/_Loading'

import './index.scss'

@connect(({ userInfo, check }) => ({
  ...userInfo,
  ...check
}))
@withLoad({
  type: 'check/getCheckList',
  listProp: 'checkList',
  limit: 4
  /* isScrollView: 1 */
})
export default class UserInfo extends Component {
  config = {
    navigationBarTitleText: '寄存列表查询页面',
    onReachBottomDistance: 50
  }
  state = {
    current: 0,
    page: 1,
    limit: 4,
    loading: false,
    selector: ['男', '女'],
    projectState: ['未取件', '已取件', '已逾期']
  }
  toPersonal = () => {
    Taro.navigateTo({
      url: '/pages/personal/index'
    })
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  render() {
    const { loading, mLoading, noMore, noData } = this.state
    const {
      checkList: { list },
      name,
      head_image,
      id_card,
      resx
    } = this.props
    const tabList = [
      { title: '全部' },
      { title: '待取件' },
      { title: '已取件' },
      { title: '已逾期' }
    ]
    const _afterThreeNoData = list.length && list.length < 4
    const _noData = noData || _afterThreeNoData
    const awaitExpress = list.filter(item => item.state === 1)
    const geted = list.filter(item => item.state === 2)
    const overTime = list.filter(item => item.state === 3)

    return (
      <View className='index'>
        <View className='top'>
          <AtAvatar circle image={head_image} className='image'></AtAvatar>
          <View className='info-wrap'>
            <View className='top-info item item1'>
              <View className='top-info-name item item1'>
                <View className='btn-max-y'>
                  <Text>{name}</Text>
                </View>
                <View size='25' className='at-icon at-icon-heart'></View>
              </View>
              <View className='top-info-number item item2'>
                <View className='btn-max-y'>
                  <Text>{id_card}</Text>
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
            animated={false}
            current={this.state.current}
            tabList={tabList}
            onClick={this.handleClick.bind(this)}
          >
            <AtTabsPane current={this.state.current} index={0}>
              <View>
                {list.length &&
                  list.map(item => {
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
                <Loading
                  loading={loading}
                  mLoading={mLoading}
                  noData={_noData}
                  noMore={noMore}
                  noDataText={_afterThreeNoData ? '我是有底线的哦！' : ''}
                />
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              <View>
                {awaitExpress.length &&
                  awaitExpress.map(item => {
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
                <Loading
                  loading={loading}
                  mLoading={mLoading}
                  noData={_noData}
                  noMore={noMore}
                  noDataText={_afterThreeNoData ? '我是有底线的哦！' : ''}
                />
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={2}>
              <View>
                {geted.length &&
                  geted.map(item => {
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
                <Loading
                  loading={loading}
                  mLoading={mLoading}
                  noData={_noData}
                  noMore={noMore}
                  noDataText={_afterThreeNoData ? '我是有底线的哦！' : ''}
                />
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={3}>
              <View>
                {overTime.length &&
                  overTime.map(item => {
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
                <Loading
                  loading={loading}
                  mLoading={mLoading}
                  noData={_noData}
                  noMore={noMore}
                  noDataText={_afterThreeNoData ? '我是有底线的哦！' : ''}
                />
              </View>
            </AtTabsPane>
          </AtTabs>
        </View>
      </View>
    )
  }
}
