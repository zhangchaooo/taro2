import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

export default class Card extends Component {

  static defaultProps = {
    styles: {},
    widthFull: false
  }

  handleClick() {
    this.props.onClick()
  }

  render() {
    const { styles, classnames, widthFull } = this.props;
    let _s = {};
    widthFull && (_s.margin = '10px 0');



    return (
      <View
        onClick={this.handleClick.bind(this)}
        className={'Card '+classnames}
        style={{
          padding: '12px 10px',
          margin: '8px 24px',
          background: '#fff',
          boxShadow: '0px 3px 6px rgba(16,49,180,0.16)',
          borderRadius:'8px',
          ...styles,
          ..._s
        }}
      >
        {this.props.children}
      </View>
    )
  }
}
