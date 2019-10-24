import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import './index.scss';

export default class MyButton extends Component {
  clickHandle(e) {
    this.props.onClickProp(e)
  }
  render() {
    const { name, width, height, background, color, type } = this.props;
    return (
      <View className='myButton'>
        {
          !type ?
            <Button
              className='Button'
              onClick={this.clickHandle.bind(this)}
              style={{
                width: width + 'px',
                heigth: height + 'px',
                lineHeight: height + 'px',
                background,
                color
              }}
              className='btn bg-color2'>{name}</Button> :
          <Button
            open-type='getUserInfo'
            className='Button tj-style login-btn'
            onGetUserInfo={this.clickHandle.bind(this)}
            style={{
              width: width + 'px',
              heigth: height + 'px',
              lineHeight: height + 'px',
              background,
              color
            }}
            className='btn bg-color2'>{name}</Button>
        }
      </View>
    )
  }
}
