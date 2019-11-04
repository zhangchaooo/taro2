import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker } from '@tarojs/components'
import { AtButton, AtAvatar, AtForm, AtInput, AtImagePicker } from 'taro-ui'
import Request from '../../utils/request'
import ListView from 'taro-listview'

import { Ionicons } from 'taro-icons'

import './index.scss'

@connect(({ listPage }) => ({
  ...listPage
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '列表分页页面'
  }
  constructor() {
    super(...arguments)
  }
  state = {
    list: [
      {
        avatar:
          'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=05b9edbbaed3fd1f2204aa6851274e7a/1ad5ad6eddc451da06f9727eb0fd5266d0163213.jpg',
        title: '网易云音乐1',
        value: '周杰伦'
      },
      {
        avatar:
          'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=05b9edbbaed3fd1f2204aa6851274e7a/1ad5ad6eddc451da06f9727eb0fd5266d0163213.jpg',
        title: '网易云音乐2',
        value: '周杰伦2'
      },
      {
        avatar:
          'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=05b9edbbaed3fd1f2204aa6851274e7a/1ad5ad6eddc451da06f9727eb0fd5266d0163213.jpg',
        title: '网易云音乐3',
        value: '周杰伦3'
      },
      {
        avatar:
          'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=05b9edbbaed3fd1f2204aa6851274e7a/1ad5ad6eddc451da06f9727eb0fd5266d0163213.jpg',
        title: '网易云音乐4',
        value: '周杰伦4'
      },
      {
        avatar:
          'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=05b9edbbaed3fd1f2204aa6851274e7a/1ad5ad6eddc451da06f9727eb0fd5266d0163213.jpg',
        title: '网易云音乐5',
        value: '周杰伦5'
      }
    ]
  }

  componentDidMount() {}

  onPullDownRefresh = async rest => {
    const res = await fetch(1) // { list: array, hasMore: boolean }
    this.setState(res)
    rest()
  }

  onScrollToLower = async fn => {
    const { list } = this.state
    const { list: newList, ...rest } = await fetch(++pageIndex)
    this.setState({
      list: list.concat(newList),
      ...rest
    })
    fn()
  }

  render() {
    const { hasMore, list } = this.state
    return (
      <View className='index'>
        {/* listPage
        <Ionicons name='ios-woman' size={32} color='pink' />
        <Ionicons name='ios-female' size={32} color='red' />
        <Ionicons name='ios-call' size={32} color='pink' /> */}
        <ListView
          hasMore={hasMore}
          /* isEmpty */
          /* isError */
          /* needInit */
          distanceToRefresh={10}
          damping={200}
          emptyText='legends never die'
          footerLoaded='不触碰底线'
          footerLoading='加载...'
          style={{
            height: '100vh',
            background: 'orange',
            color: 'white',
            fontSize: '35px'
          }}
          onScrollToLower={fn => this.onScrollToLower(fn)}
        >
          {list.map((item, index) => (
            <View key={index}>
              <Image className='avatar skeleton-radius' src={item.avatar} />
              <View>{item.title}</View>
              <View>{item.value}</View>
            </View>
          ))}
        </ListView>
      </View>
    )
  }

  toHome() {
    Taro.navigateTo({
      url: '/pages/home/index'
    })
  }
}
