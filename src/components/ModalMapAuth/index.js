import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Btn from '../_Btn';
import Pop from '../_Pop';
import './index.scss';

@connect(({  }) => ({
}))
export default class ModalMapAuth extends Component {
  static defaultProps = {
    isShow: false
  }

  onOpenSetting(e) {

      console.log(e)
  }

  handleCancel() {
    console.log(1111)
    this.props.onCancel()
  }

  render() {
    const { isShow } = this.props

    return (
      <View className='ModalMapAuth'>
        <Pop show={isShow} onBgClick={this.handleToggleSku.bind(this)}>
          <View className='wh-f bg-c3 pos-a flex fcc'>
            <View style={{width: '280px', borderRadius: '5px'}} className='flex-c fcc bg-w ta-c of-h'>
              <View className='c-666 p-30 bb w-f bs-b'>
                提示
              </View>
              <View style={{minHeight: '60px'}} className='flex-c fai-c p-20 bs-b bb w-f'>
                <View className='c-999 mt-10'>需要授权使用腾讯地图，才可以使用打卡服务</View>
                {/* <View><Img width='200px' height='180px' src={AuthImg}></Img></View> */}
              </View>
              <View className='flex fai-c fjc-sa w-f'>
                {/* <Btn onClick={this.handleCancel.bind(this)} styles={{height:'50px', width:'140px', border:'none'}}>取消</Btn> */}
                <Button
                  className='Button bl'
                  style={{
                    width: '280px',
                    height: '50px',
                    lineHeight: '50px',
                    margin: 0,
                    padding: 0,
                    fontSize: '14px',
                    background: '#fff',
                    borderRadius: '3px',
                    color: '#666',
                    border:'none',
                    position: 'initial',
                  }}
                  open-type='openSetting'
                  onOpenSetting={() => this.onOpenSetting()}
                >去授权</Button>
              </View>
            </View>
          </View>
        </Pop>
      </View>
    )
  }
}
