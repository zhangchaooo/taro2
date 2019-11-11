import { Component } from '@tarojs/taro'
import { AtActivityIndicator } from 'taro-ui'
import { View, Image } from '@tarojs/components'
import notAnyThing from '../../images/component/dcce8708d7c76e0109c74195fd85452.png'
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
      /* alignItems: 'center', */
      background: noData ? '#fff' : 'rgba(0,0,0,0.5)',
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
          <View>
            <Image
              style='width: 140px;height: 140px;color: #ffab0a'
              src={notAnyThing}
              className='nullImage'
            ></Image>
            <View className='notAnyThing'>暂无快递信息</View>
          </View>
        )
      ) : noMore ? (
        '—— 没有更多 ——'
      ) : mLoading ? (
        <AtActivityIndicator
          color='#6697E9'
          mode='center'
        ></AtActivityIndicator>
      ) : (
        '—— 上拉显示更多 ——'
      )

    const sContainer =
      loading || noData || _oneLoading ? sContainerFull : sContainerBlock

    return <View style={sContainer}>{cnt}</View>
  }
}
