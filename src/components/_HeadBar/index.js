import Taro, { Component } from '@tarojs/taro'
import './index.scss'

export default class HeadBar extends Component {
  static defaultProps = {
    bg: 'rgba(0,0,0,0)',
    color: '#fff'
  }
  hanldeClick() {
    Taro.navigateBack()
  }
  render() {
    const { bg, title, color, noNav } = this.props;
    console.log(bg);
    return (

        <View style={{ background: bg, color, zIndex: '10002'}} className='HeadBar pos-f t-0 w-f zi-10000'>

          <View style={{
            height: '20px'
          }}></View>

          <View
            className='flex fcc fw-500 pos-r'
            style={{
              height: '42px',
              fontSize: '19px',
              
            }}>
            <View className='title'>{title}</View>
            { !noNav &&
              <View
                className='link pos-a h-f l-0 t-0 flex fcc'
                style={{
                  width: '50px'
                }}
                onClick={this.hanldeClick.bind(this)}>

                  <View style={{
                     borderBottom: '2px solid #fff',
                     borderLeft: '2px solid #fff',
                     transform: 'rotate(45deg)',
                     color: '#fff',
                     width: '15px',
                     height: '15px',
                     borderColor: color,
                  }}></View>
                </View>
            }
          </View>
        </View>

    )
  }
}