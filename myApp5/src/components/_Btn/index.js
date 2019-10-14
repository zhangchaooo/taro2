import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

export default class Btn extends Component {

  static defaultProps = {
    size: 'normal', // large
    type: 'primary', // theme
    styles: {}
  }
  handleClick(e) {
    this.props.onClick(e)
  }
  render() {
    const { size, styles, type, color, bg } = this.props;
    let sSize =
      size == 'normal'
        ? {
          padding: '5px 10px',
          borderRadius: '3px',
        } : size == 'large'
          ? {
            width: '344px',
            height: '48px',
            borderRadius: '40px',
            fontSize: '16px',
          } : size == 'medium'
          ? {
            padding: '0 20px',
            height: '40px',
            borderRadius: '40px',
            fontSize: '16px',
          } : {}
    let sType = 
      type === 'theme'
        ? {
          background: 'linear-gradient(173deg,rgba(78,73,230,1) 0%,rgba(47,229,198,1) 100%)',
          color: '#ffffff',
        } : {
          border: '1px solid #ccc',
          background: '#fff',
          color: '#666',
        }
    let sColor = {}
    if(color) sColor = {color,border: 'none'}
    bg && (sColor.background = bg)
    
    return (
        <View
          style={{
            display: 'inline-block',
          }}
          className='Btn'
          onClick={this.handleClick.bind(this)}>
          <View
            className='flex fcc'
            style={{
              position: 'relative',
              overflow: 'hidden',
              ...sType,
              ...sSize,
              ...sColor,
              ...styles,
            }}
          >
            {this.props.children}
            <View
              className='btn-active wh-f'
              style={{
                position: 'absolute',
                top: 0,
                left: 0
              }}
              ></View>
          </View>
        </View>
    )
  }
}
