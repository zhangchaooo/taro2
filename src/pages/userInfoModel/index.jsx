import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { loadList } from '../../utils/loadList'
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
import Request from '../../utils/request'

import './index.scss'

@connect(({ userInfo, check }) => ({
  ...userInfo,
  ...check
}))
@withLoad({
  type: 'check/getCheckList',
  listProp: 'checkList',
  limit: 5
  /* total: 8 */
  // isScrollView: 1
})
export default class UserInfo extends Component {
  defaultProps = {
    list: []
  }
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
    nickName: '',
    total: 8,
    display_name: 'none',
    display_text: 'block'
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
    let i = value
    console.log(i)
    if (i === 0) return

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
    Request({
      url: '/depositor/show',
      method: 'GET'
    }).then(res => {
      /* console.log(res.depositor_wechat_user) */
      if (
        res.depositor_wechat_user.id_card &&
        res.depositor_wechat_user.mobile &&
        res.depositor_wechat_user.name &&
        res.depositor_wechat_user.id_card &&
        res.depositor_wechat_user.unit
      ) {
        console.log('存在')
        Taro.navigateTo({
          url: '/pages/home/index'
        })
      } else {
        Taro.navigateTo({
          url: '/pages/index/index'
        })
      }
    })
    /* Taro.navigateTo({
      url: '/pages/home/index'
    }) */
  }
  refreshData = () => {
    console.log('refresh')
    /* loadList({
      this: this,
      ['limit']: 5,
      page: page + 1
    }) */
    /* this.setState({
      current: 0
    }) */
    /* this.props.dispatch({
      type: 'check/getCheckList',
      payload: i === 0 ? { page: 1, limit: 5 } : { page: 1, limit: 5 },
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
    */
    console.log(this.props)

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
  showAddButton = (avatarUrl, nickName) => {
    console.log('show_add_button')
    this.setState({
      display_name: 'block',
      display_text: 'none',
      avatarUrl,
      nickName
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
    /*  console.log('state', this.state) */
    Taro.getStorageInfo({
      success: res => {
        // console.log('keys',res.keys[0]);
        if (res.keys[0] === 'access_token') {
          this.showAddButton && this.showAddButton()
        }
      }
    })

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
    console.log(
      '组件的list',
      list,
      '---------------------------------------------------------------------------------'
    )
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
          style={{ padding: '5px', display: this.state.display_name }}
        ></View>
        <View className='top'>
          {/* <AtAvatar circle image={head_image} className='image'></AtAvatar> */}
          <ModalLogin
            isShow={this.state.showLogin}
            onCancel={this.cancel.bind(this)}
            onRefreshData={this.refreshData.bind(this)}
            onShowAddButton={this.showAddButton.bind(this)}
            List={this.props.list}
          ></ModalLogin>
          {/* <AtFab
            onClick={this.onButtonClick.bind(this)}
            className='suspensionBtn'
          >
            去登录
          </AtFab> */}
          <AtBadge value={this.state.nickName}>
            <View onClick={this.onButtonClick.bind(this)}>
              <AtAvatar
                circle
                size='large'
                image={this.state.avatarUrl ? this.state.avatarUrl : notLogin}
              />
            </View>
          </AtBadge>
          <View
            style={{ display: this.state.display_text }}
            className='notlogin'
          >
            未登录
          </View>
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
              <View style='height: 100%;' scrollY className='fixedHeight'>
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
              </View>
            </AtTabsPane>

            <AtTabsPane
              /* tabDirection='vertical' */
              current={this.state.current}
              index={1}
              className='testHeight'
            >
              <View style='height: 100%;' scrollY className='fixedHeight'>
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
              </View>
            </AtTabsPane>

            <AtTabsPane
              /* tabDirection='vertical' */
              current={this.state.current}
              index={2}
              className='testHeight'
            >
              <View style='height: 100%;' scrollY className='fixedHeight'>
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
              </View>
            </AtTabsPane>

            <AtTabsPane
              /* tabDirection='vertical' */
              current={this.state.current}
              index={3}
              className='testHeight'
            >
              <View style='height: 100%;' scrollY className='fixedHeight'>
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
              </View>
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
