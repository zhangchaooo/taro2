import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Btn from '../_Btn'
import Pop from '../_Pop'
import Img from '../_Img'
import AuthImg from '../../images/component/auth.jpg'
import './index.scss'

@connect(({}) => ({}))
export default class ModalLogin extends Component {
  static defaultProps = {
    isShow: false
  }

  getUserInfo(e) {
    const _this = this
    const { dispatch } = this.props
    console.log(1)

    Taro.login({
      success: res => {
        const { encryptedData, iv, userInfo } = e.detail
        /* console.log(encryptedData, iv, res.code)
        console.log(iv)
        console.log(res.code) */
        console.log(userInfo)

        dispatch({
          type: 'member/login',
          payload: {
            code: res.code,
            encryptedData,
            iv
          },
          callback: _res => {
            if (_res.code == 0) {
              const { nickName, avatarUrl } = userInfo || {}
              Taro.setStorageSync('user_info', { nickName, avatarUrl })
              dispatch({
                type: 'user/save',
                payload: {
                  userInfo: { nickname: nickName, imageheadurl: avatarUrl }
                }
              })
              Taro.showToast({
                title: '登录成功',
                icon: 'none'
              })
              this.props.onCancel(1)
            } else {
              Taro.showToast({
                title: _res.message,
                icon: 'none'
              })
            }
          }
        })
      }
    })
  }

  handleCancel() {
    this.props.onCancel()
  }

  handleToggleSku() {}

  render() {
    const { isShow } = this.props

    return (
      <View className='ModalLogin'>
        <Pop show={isShow} onBgClick={this.handleToggleSku.bind(this)}>
          <View className='wh-f bg-c3 pos-a flex fcc'>
            <View
              style={{ width: '280px', borderRadius: '5px' }}
              className='flex-c fcc bg-w ta-c of-h'
            >
              <View className='c-666 p-30 bb w-f bs-b'>提示</View>
              <View
                style={{ minHeight: '60px' }}
                className='flex-c fai-c p-20 bs-b bb w-f'
              >
                <View className='c-999 mt-10'>
                  为了更好的服务，请在稍后的提示框中点击允许
                </View>
                <View>
                  <Img width='200px' height='180px' src={AuthImg}></Img>
                </View>
              </View>
              <View className='flex fai-c fjc-sa w-f'>
                <Btn
                  onClick={this.handleCancel.bind(this)}
                  styles={{ height: '50px', width: '140px', border: 'none' }}
                >
                  取消
                </Btn>
                <Button
                  className='Button bl'
                  style={{
                    width: '140px',
                    height: '50px',
                    lineHeight: '50px',
                    margin: 0,
                    padding: 0,
                    fontSize: '14px',
                    background: '#fff',
                    borderRadius: '3px',
                    color: '#666'

                    // position: 'initial',
                  }}
                  open-type='getUserInfo'
                  onGetUserInfo={this.getUserInfo.bind(this)}
                >
                  去授权
                </Button>
              </View>
            </View>
          </View>
        </Pop>
      </View>
    )
  }
}
