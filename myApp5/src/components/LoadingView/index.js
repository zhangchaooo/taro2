import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import {AtActivityIndicator} from 'taro-ui'
import './index.scss'

class LoadingView extends Component {

  // handleTouchMove(e) {
  //   e.stopPropagation()
  // }

  render() {
    return (
      <View
        style={{width: '100vw', height: '100vh', zIndex: 9998, fontSize: '11px'}}
        className='loadingView pos-a flex fcc bg-f1 c-999'
        // onTouchMove={this.handleTouchMove.bind(this)}
      >
        <AtActivityIndicator
          mode='center'
          color='#ed414a'
        />
        {/* <View>加载中...</View> */}
      </View>)
  }
}

export default LoadingView;
