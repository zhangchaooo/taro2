import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

export default class Pop extends Component {
  static defaultProps = {
    show: false
  }

  handleClick(e) {
    this.props.onClick(e);
  }
  // 阻止modal事件冒泡
  handleModalClick(e) {
    e.stopPropagation()
  }
  // 阻止浮层触摸滚动
  handleTouchMove(e) { e.stopPropagation(); }

  render() {
    const { show } = this.props;

    return show ? 
      <View
        onTouchMove={this.handleTouchMove.bind(this)}
        onClick={this.handleClick.bind(this)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10000,
          background: 'rgba(0, 0, 0, 0.5)',
        }}
        className={`${show?' show':' hide'}`}>
        {/* <View
          onClick={this.handleBgClick.bind(this)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 999,
          }}
        ></View> */}
        <View className='modal' onClick={this.handleModalClick.bind(this)}>{this.props.children}</View>
      </View> 
    : ''
  }
}
