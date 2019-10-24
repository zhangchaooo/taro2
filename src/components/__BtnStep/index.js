import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import Btn from '../_Btn'
import './index.scss';

export default class BtnStep extends Component {

  static defaultProps = {
  }
  handleClick() {
    this.props.onClick()
  }
  render() {

    return (
      <View style={{bottom: '75px', right: '23px'}} className='pos-f'>
        <Btn
          color="#fff"
          bg="#6697E9"
          styles={{
            borderRadius: '50%',
            height: '56px',
            width: '56px'
          }}
          onClick={this.handleClick.bind(this)}
        >
          {this.props.children}</Btn>
      </View>
    )
  }
}
