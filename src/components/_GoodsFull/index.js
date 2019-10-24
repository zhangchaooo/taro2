import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import CardStep from '../__CardStep';
import './index.scss';

export default class GoodsFull extends Component {
  static defaultProps = {
    data: [],
    // options: {
    //   titleRows: 1
    // }
  }

  handleClick(d) {
    this.props.onClick(d)
  }

  render() {
    const {
      data,
      // options: {
      //   titleRows
      // },
    } = this.props;

    // const titleStyle = {
    //   overflow:'hidden',
    //   textOverflow: 'ellipsis'
    // }
    // const rowStyle = titleRows === 1
    //   ? {
    //     height: '20px',
    //     whiteSpace: 'nowrap',
    //   }
    //   : {
    //     height: '40px',
    //     display:'-webkit-box',
    //     WebkitLineClamp: 2,
    //     WebkitBoxOrient: 'vertical',
    //   }
    return (
      <View className='GoodsFull'>
        <View>
          {data.map(d => {
            return (
              <View style={{
                margin: '8px 15px',
              }} key={d.id} onClick={this.handleClick.bind(this, d)}>
                 <CardStep data={d}></CardStep>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
