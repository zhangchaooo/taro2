import { Component } from '@tarojs/taro'
import { AtActivityIndicator } from 'taro-ui'
import { View } from '@tarojs/components'
import './index.scss'
/**
 * 包裹组件的元素的宽高决定 loading和noData背景的宽高
 * 父元素定位relative
 */
export default class Loading extends Component {
  render() {
    const { loading, mLoading, noMore, noData, noDataText } = this.props
    const sContainerFull = {
      position: 'absolute',
      top: 0,
      let: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: noData ? '#f1f1f1' : 'rgba(0,0,0,0.5)',
      color: noData ? '#999' : '#fff',
      width: '100%',
      height: '100%',
      fontSize: '12px',
      zIndex: '10001'
    }
    const sContainerBlock = {
      position: 'relative',
      color: '#999',
      width: '100%',
      height: '50px',
      textAlign: 'center',
      fontSize: '12px',
      lineHeight: '50px'
    }

    const _oneLoading =
      loading === undefined &&
      mLoading === undefined &&
      noMore === undefined &&
      noData === undefined
    const cnt =
      loading || _oneLoading ? (
        <AtActivityIndicator
          size={100}
          color='#6697E9'
          mode='center'
        ></AtActivityIndicator>
      ) : noData ? (
        noDataText ? (
          noDataText
        ) : (
          '暂无内容'
        )
      ) : noMore ? (
        '—— 没有更多 ——'
      ) : mLoading ? (
        <AtActivityIndicator
          color='#6697E9'
          mode='center'
        ></AtActivityIndicator>
      ) : (
        '—— 没有更多 ——'
      )

    const sContainer =
      loading || noData || _oneLoading ? sContainerFull : sContainerBlock

    return <View style={sContainer}>{cnt}</View>
  }
}
