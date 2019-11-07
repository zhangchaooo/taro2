import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtFab } from 'taro-ui'
import Loading from '../../components/_Loading'
import ModalLogin from '../../components/ModalLogin/index.js'
import notLogin from '../../images/component/e49b2415cf2e0914b924d9a27f2013e.png'
import withLoad from '../../utils/withLoad'

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
    loading: false,
    mLoading: false,
    noMore: '没有更多',
    _noData: '暂无内容'
    /* _afterThreeNoData: '数据不足三条' */
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
  continueToDeposite = () => {
    Taro.navigateTo({
      url: '/pages/home/index'
    })
  }

  onButtonClick = () => {
    /* console.log('xuanfuanniu') */
    this.setState({
      showLogin: true
    })
  }
  cancel = () => {
    this.setState({ showLogin: false })
    /* console.log('cancel') */
  }
  componentDidMount() {}

  render() {
    const { loading, mLoading, noMore, _noData, _afterThreeNoData } = this.state
    const {
      checkList: { list },
      name,
      head_image,
      id_card,
      resx,
      sex
    } = this.props
    const tabList = [
      { title: '全部' },
      { title: '待取件' },
      { title: '已取件' },
      { title: '已逾期' }
    ]
    const sexArray = ['&#xe661;', '&#xe690;']
    /*  const _afterThreeNoData = list.length && list.length < 2 */
    /* const _noData = _noData || _afterThreeNoData */
    const awaitExpress = list.filter(item => item.state === 1)
    const geted = list.filter(item => item.state === 2)
    const overTime = list.filter(item => item.state === 3)
    console.log('lsit', list)

    return (
      <View className='index'>
        {/* <View
          onClick={this.continueToDeposite.bind(this)}
          className='at-icon at-icon-add add '
        ></View> */}
        <View className='top'>
          {/* <AtAvatar circle image={head_image} className='image'></AtAvatar> */}
          <ModalLogin
            isShow={this.state.showLogin}
            onCancel={this.cancel.bind(this)}
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
              <View className='getPadding'>
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
              className='getPadding'
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
