import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import Img from '../_Img'
import './index.scss';

export default class GoodsList extends Component {
  static defaultProps = {
    data: [],
    options: {
      titleRows: 1
    }
  }

  handleClick(item) {
    this.props.onClick(item)
  }

  render() {
    const {
      data,
      options: {
        titleRows
      }
    } = this.props;

    const itemH = '80px'

    const titleStyle = {
      overflow:'hidden',
      textOverflow: 'ellipsis'
    }
    const rowStyle = titleRows === 1
      ? {
        height: '20px',
        whiteSpace: 'nowrap',
      }
      : {
        height: '40px',
        display:'-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
      }
    return (
      <View className='GoodsList'>
        <View>
          {data.map(d => {
            const { id, title, price, image } = d;
            return(
              <View
                key={id}
                onClick={this.handleClick.bind(this, d)}
                className='flex fai-c bg-w pl-30'
                style={{height: itemH}}
              >

                <View className='mr-20'>
                  <Img
                    size='75px'
                    src={image}
                  ></Img>
                </View>

                <View className='flex-c fjc-sa bb h-f pr-30 fg-1 fw-600'>
                  <View
                    className='fs-30'
                    style={{
                      width: '100%',
                      ...titleStyle,
                      ...rowStyle,
                    }}
                  >{title}</View>
                  <View className='price c-1'>￥{price}</View>
                </View>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
