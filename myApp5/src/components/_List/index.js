import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import Img from '../_Img';
import './index.scss';

export default class List extends Component {
  static defaultProps = {
    data: []
  }
  handleClick(d) {
    this.props.onClick(d)
  }

  render() {
    const { data } = this.props;
    return (
      <View className='list bg-w'>
        {
          data.map((d) => {
            const { id, icon, title, note, extra, allow } = d;

            return (
              <View
                key={id}
                onClick={this.handleClick.bind(this, d)}
                className={`h-100 flex fjc-sb fai-c ml-30 bb ${allow?' allow':''}`}
              >
                <View className='flex fai-c'>
                  {/* ICON */}
                  {icon &&
                  <View className='mr-20'>
                    <Img size='30px' src={icon} />
                  </View>}
                  {/* Title */}
                  <View className='flex-c fjc-c'>
                    <View className=''>{title}</View>
                    {note&&
                    <View className='c-999 mt-10 fs-20' >{note}</View>}
                  </View>
                </View>

                <View style={{marginRight: '25px'}} className='c-999'>
                  {extra}
                </View>
              </View>
          )})
        }
      </View>
    )
  }
}
