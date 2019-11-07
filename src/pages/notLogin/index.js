import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import ModalLogin from '../../components/ModalLogin'
import Card from '../../components/_Card'
import Img from '../../components/_Img'
import BtnStep from '../../components/__BtnStep'
import HeadBar from '../../components/_HeadBar'
import OrderNewImg from '../../images/user_log.jpg'
import OrderPayImg from '../../images/user_sm.jpg'
import dianweiImg from '../../images/user_dianwei.png'
import HomeImg from '../../images/btn_home.png'
import BgImg from '../../images/user_bg.jpg'
import UserImg from '../../images/btn_user.png'
import { authNav } from '../../utils/index'
import './index.scss'

@connect(({ user, member }) => ({
  ...user,
  ...member
}))
export default class User extends Component {
  config = {
    // navigationBarTitleText: '个人中心',
    // navigationBarBackgroundColor: "#FE231D",
    // navigationBarTextStyle: 'white'
    navigationStyle: 'custom'
  }

  state = {
    showLogin: false
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'user/userInfo'
    })
  }

  handleLink(item) {
    if (item.title) {
      if (item.id == 1) {
        return Taro.navigateTo({
          url: item.path
        })
      }
      return authNav({
        path: item.path,
        failCb: () => this.setState({ showLogin: true })
      })
    }

    Taro.navigateTo({ url: '/pages/home/index' })
  }

  cancel() {
    this.setState({ showLogin: false })
  }

  handleShowLogin() {
    this.setState({ showLogin: true })
  }

  render() {
    const {
      userInfo: { nickname, imageheadurl }
    } = this.props
    const { showLogin } = this.state

    const listViewData = [
      {
        title: '点位申请记录',
        icon: dianweiImg,
        id: 0,
        path: '/pages/user/location_log/index'
      },
      {
        title: '捐步记录',
        icon: OrderNewImg,
        id: 0,
        path: '/pages/user/log/index'
      },
      {
        title: '小程序说明',
        icon: OrderPayImg,
        id: 1,
        path: '/pages/user/ex/index'
      }
    ]

    return (
      <View className='user'>
        <HeadBar title='个人中心' noNav></HeadBar>

        <View
          style={{ padding: '95px 24px 0 24px', marginBottom: '30px' }}
          className='flex fai-c pl-30 bs-b c-w'
        >
          <View
            onClick={this.handleShowLogin.bind(this)}
            className='flex fcc'
            style={{
              border: '2px solid #fff',
              borderRadius: '50%',
              width: '80px',
              height: '80px'
            }}
          >
            <Img
              type='avatar'
              size={imageheadurl ? '80px' : '60px'}
              src={imageheadurl || UserImg}
            ></Img>
          </View>
          <View className='pl-30 fs-40 fw-600'>
            {nickname ? (
              nickname
            ) : (
              <View
                onClick={this.handleShowLogin.bind(this)}
                className='pl-10 fs-40 fw-600'
              >
                点击登录
              </View>
            )}
          </View>

          <View
            style={{
              borderBottomLeftRadius: '10%',
              borderBottomRightRadius: '10%'
            }}
            className='pos-a t-0 l-0 w-f zi--10000 of-h'
          >
            <Img height='270px' width='100%' src={BgImg}></Img>
          </View>
        </View>

        <View>
          {listViewData.map(l => {
            const { id, path, title, icon } = l
            return (
              <Card
                onClick={this.handleLink.bind(this, l)}
                styles={{ height: '72px' }}
                classnames='flex fai-c allow'
              >
                <View className='mr-20'>
                  <Img
                    styles={{ background: '#C37ADE' }}
                    type='avatar'
                    size='40px'
                    src={icon}
                  ></Img>
                </View>
                <View className='fs-30'>{title}</View>
              </Card>
            )
          })}
        </View>

        {/* <BtnStep onClick={this.handleToHome.bind(this)}>
          <Img width='30px' height='30px' src={HomeImg}>
        </Img></BtnStep> */}

        <ModalLogin
          isShow={showLogin}
          onCancel={this.cancel.bind(this)}
        ></ModalLogin>
      </View>
    )
  }

  handleToHome() {
    Taro.redirectTo({ url: '/pages/home/index' })
  }
}
