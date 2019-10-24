import Taro, { Component } from '@tarojs/taro'
import { AtActivityIndicator } from 'taro-ui'
import { View } from '@tarojs/components'
import './index.scss'

export default class MyAvatar extends Component {
  render() {
    const { loading, mLoading, noMore, noData } = this.props
    const cnt = loading ? (
      <AtActivityIndicator
        color='rgba(237,65,74,1)'
        mode='center'
      ></AtActivityIndicator>
    ) : noData ? (
      '暂无内容'
    ) : noMore ? (
      '—— 没有更多 ——'
    ) : mLoading ? (
      <AtActivityIndicator
        color='rgba(237,65,74,1)'
        mode='center'
      ></AtActivityIndicator>
    ) : (
      '—— 上拉显示更多 ——'
    )
    let styles
    if (loading || noData) {
      styles = {
        position: 'absolute',
        top: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f1f1f1',
        width: '100%',
        height: '100%',
        color: '#999',
        fontSize: '11px',
        zIndex: '-10000'
      }
    } else {
      styles = {
        position: 'relative',
        width: '100%',
        height: '20px',
        textAlign: 'center',
        fontSize: '11px',
        fontWeight: '400',
        lineHeight: '20px',
        color: '#999',
        paddingTop: '20px',
        paddingBottom: '20px',
        zIndex: '-10000'
      }
    }

    return <View style={styles}>{cnt}</View>
  }
}
