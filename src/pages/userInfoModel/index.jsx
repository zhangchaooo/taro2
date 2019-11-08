import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, ScrollView } from '@tarojs/components'
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
import notLogin from '../../images/component/e49b2415cf2e0914b924d9a27f2013e.png'

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
    this.setState({
      current: value
    })
    let i = value + 1
    console.log(i)

    this.props.dispatch({
      type: 'check/getCheckList',
      payload: {
        state: i,
        limit: 5,
        page: 1
      },
      callback: res => {
        console.log('Tabs_res', res)
        const { data, meta } = res
        const dataNum =
          (meta.pagination.current_page - 1) * meta.pagination.per_page +
          data.length
        this.setState({
          page: 1,
          loading: false,
          moreLoading: false,
          noData: !meta.pagination.total,
          noMore: dataNum == meta.pagination.total
        })
        /* console.log('Tabs_state', this.state) */
        const {
          checkList: { list }
        } = this.props
        /* console.log('Tabs_porps_checklist_list', list) */
      }
    })
  }
  continueToDeposite = () => {
    Taro.navigateTo({
      url: '/pages/home/index'
    })
  }
  refreshData = i => {
    console.log('refresh')
    console.log(i)
    this.setState({
      page: 1,
      loading: false,
      moreLoading: false,
      noData: !meta.pagination.total,
      noMore: dataNum == meta.pagination.total
    })
    /* Taro.navigateTo({
      url: '/pages/home/index'
    }) */
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
    /*  console.log('state', this.state) */
    Taro.getUserInfo({
      success: res => {
        /* console.log('res', res.userInfo.nickName) */
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
    let {
      checkList: { list },
      name,
      head_image,
      id_card,
      resx,
      sex,
      noDataText
    } = this.props
    if (!list) list = []
    console.log(list)
    const tabList = [
      { title: '全部' },
      { title: '待取件' },
      { title: '已取件' },
      { title: '已逾期' }
    ]
    const sexArray = ['&#xe661;', '&#xe690;']
    const _afterThreeNoData = list.length && list.length < 1
    const _noData = noData || _afterThreeNoData
    /* console.log('_noData有没有', _noData) */
    /* const awaitExpress = list.filter(item => {
      return item.state === 1
    })
    const geted = list.filter(item => {
      return item.state === 2
    })
    const overTime = list.filter(item => {
      return item.state === 3
    }) */

    return (
      <View className='index'>
        <View
          onClick={this.continueToDeposite.bind(this)}
          className='at-icon at-icon-add add '
        ></View>
        <View className='top'>
          {/* <AtAvatar circle image={head_image} className='image'></AtAvatar> */}
          <ModalLogin
            isShow={this.state.showLogin}
            onCancel={this.cancel.bind(this)}
            onRefreshData={this.refreshData.bind(this)}
          ></ModalLogin>
          {/* <AtFab
            onClick={this.onButtonClick.bind(this)}
            className='suspensionBtn'
          >
            去登录
          </AtFab> */}
          <Image
            onClick={this.onButtonClick.bind(this)}
            style='width: 60px; height: 60px;'
            src={notLogin}
          />
          <View className='notlogin'>未登录</View>
        </View>
        <AtTabsPane className='TabsWrap'>
          <AtTabs
            animated
            current={this.state.current}
            tabList={tabList}
            onClick={this.handleClick.bind(this)}
            swipeable
            /* tabDirection='vertical' */
          >
            <AtTabsPane
              /* tabDirection='vertical' */
              current={this.state.current}
              className='testHeight'
              index={0}
            >
              <ScrollView style='height: 100%;' scrollY className='fixedHeight'>
                {/* 标签第一页 */}
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
              </ScrollView>
            </AtTabsPane>

            <AtTabsPane
              /* tabDirection='vertical' */
              current={this.state.current}
              index={1}
              className='testHeight'
            >
              <ScrollView style='height: 100%;' scrollY className='fixedHeight'>
                {/* 标签第二页 */}
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
              </ScrollView>
            </AtTabsPane>

            <AtTabsPane
              /* tabDirection='vertical' */
              current={this.state.current}
              index={2}
              className='testHeight'
            >
              <ScrollView style='height: 100%;' scrollY className='fixedHeight'>
                {/* 标签第三页 */}
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
              </ScrollView>
            </AtTabsPane>

            <AtTabsPane
              /* tabDirection='vertical' */
              current={this.state.current}
              index={3}
              className='testHeight'
            >
              <ScrollView style='height: 100%;' scrollY className='fixedHeight'>
                {/* 标签第四页 */}
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
              </ScrollView>
            </AtTabsPane>
          </AtTabs>
        </AtTabsPane>
      </View>
    )
  }
}

/* let i = value
    this.setState({ loading: true })
    const state_type =
      i === 0
        ? 'state_new'
        : i === 1
        ? 'state_pay'
        : i === 2
        ? 'state_send'
        : i === 3
        ? 'state_success'
        : i === 4
        ? 'state_cancle'
        : ''
    this.setState({
      current: i,
      state_type
    })
    this.props.dispatch({
      type: 'check/getCheckList',
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
    }) */
