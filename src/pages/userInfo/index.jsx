import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import {
  AtAvatar,
  AtTabs,
  AtTabsPane,
  AtFab,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
  AtBadge
} from 'taro-ui'
import withLoad from '../../utils/withLoad'
import Loading from '../../components/_Loading'
import ModalLogin from '../../components/ModalLogin/index.js'

import './index.scss'

@connect(({ userInfo, check }) => ({
  ...userInfo,
  ...check
}))
@withLoad({
  type: 'check/getCheckList',
  listProp: 'checkList',
  limit: 5
  /* isScrollView: 1 */
})
export default class UserInfo extends Component {
  config = {
    navigationBarTitleText: '寄存列表',
    onReachBottomDistance: 50
  }
  state = {
    current: 0,
    page: 1,
    limit: 5,
    loading: false,
    selector: ['男', '女'],
    projectState: ['待取件', '已取件', '已逾期'],
    showLogin: false,
    mLoading: false,
    noMore: '没有更多',
    noData: '没有数据',
    avatarUrl: '',
    nickName: ''
  }
  toPersonal = () => {
    Taro.navigateTo({
      url: '/pages/personal/index'
    })
  }

  handleClick(value) {
    let i = value + 1
    this.setState({ loading: true })
    const state_type =
      i === 1
        ? 'state_new'
        : i === 2
        ? 'state_pay'
        : i === 3
        ? 'state_send'
        : i === 4
        ? 'state_success'
        : i === 5
        ? 'state_cancle'
        : ''
    this.setState({
      current: i,
      state_type
    })
    this.props.dispatch({
      type: 'user/orderList',
      payload:
        i === 0 ? { page: 1, limit: 10 } : { page: 1, limit: 10, state_type },
      callback: res => {
        if (res.code === 0) {
          const { list, total, current_page, per_page } = res.data
          const dataNum = (current_page - 1) * per_page + list.length
          this.setState({
            page: 1,
            loading: false,
            moreLoading: false,
            noData: !total,
            noMore: dataNum == total
          })
        }
      }
    })
  }
  continueToDeposite = () => {
    Taro.navigateTo({
      url: '/pages/home/index'
    })
  }

  onButtonClick = () => {
    this.setState({
      showLogin: true
    })
  }
  cancel = () => {
    this.setState({ showLogin: false })
  }
  componentDidMount() {
    Taro.getUserInfo({
      success: res => {
        /* console.log('banben', res.userInfo.nickName) */
        this.setState({
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName
        })
      }
    })
  }

  render() {
    const {
      loading,
      mLoading,
      noMore,
      noData,
      avatarUrl,
      nickName
    } = this.state
    const {
      checkList: { list },
      name,
      head_image,
      id_card,
      resx,
      sex,
      noDataText
    } = this.props
    const tabList = [
      { title: '全部' },
      { title: '待取件' },
      { title: '已取件' },
      { title: '已逾期' }
    ]
    const sexArray = ['&#xe661;', '&#xe690;']
    const _afterThreeNoData = list.length && list.length < 2
    const _noData = noData || _afterThreeNoData
    const awaitExpress = list.filter(item => {
      return item.state === 1
    })
    const geted = list.filter(item => {
      return item.state === 2
    })
    const overTime = list.filter(item => {
      return item.state === 3
    })

    return (
      <View className='index'>
        <View
          onClick={this.continueToDeposite.bind(this)}
          className='at-icon at-icon-add add '
        ></View>
        <View className='top'>
          <AtBadge value={nickName}>
            <AtAvatar circle image={avatarUrl} className='image'></AtAvatar>
          </AtBadge>
          {/* <View className='info-wrap'>
            <View className='top-info item item1'>
              <View className='top-info-name item item1'>
                <View className='btn-max-y'>
                  <Text>{name}</Text>
                </View>
                {this.sexRender.bind(this)}
                <Text class='icon iconfont'>&#xe661;</Text>
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
          </View> */}
        </View>
        <View className='TabsWrap'>
          <AtTabs
            animated
            current={this.state.current}
            tabList={tabList}
            onClick={this.handleClick.bind(this)}
            swipeable
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
              <View className='getPaddings'>
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
            <AtTabsPane
              className='getPaddings'
              current={this.state.current}
              index={3}
            >
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
