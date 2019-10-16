import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtButton, AtForm, AtInput, AtAvatar } from 'taro-ui'
import './index.scss'

@connect(({ personal }) => ({
  ...personal
}))
export default class Home extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'Home'
  }
  state = {
    name: 'lison',
    sex: '男',
    mobile: '13269875489',
    id_card: '132325198709210689',
    unit: '顺丰'
  }
  handleChangeAvatar = e => {
    console.log(e)
  }
  handleChangeName = e => {
    console.log(e)
    this.props.dispatch({
      type: 'personal/save',
      payload: { name: e }
    })
    /* console.log('state.name is =>' + this.state.name) */
  }
  handleChangeNumber = e => {
    this.props.dispatch({
      type: 'personal/save',
      payload: { mobile: e }
    })
  }
  handleChangeIdCard = e => {
    this.props.dispatch({
      type: 'personal/save',
      payload: { id_card: e }
    })
  }
  handleChangeUnit = e => {
    this.props.dispatch({
      type: 'personal/save',
      payload: { unit: e }
    })
  }
  getPersonalInfo = () => {
    this.props.dispatch({
      type: 'personal/getInfo'
    })
  }

  componentWillMount() {}

  componentDidMount() {
    this.getPersonalInfo()
    console.log()
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <AtAvatar
          circle
          image={this.props.head_image}
          className='image'
        ></AtAvatar>
        <Text className='text-pesonal'>个人资料</Text>
        <View className='formWrap'>
          <AtForm
            className='form'
            onSubmit={this.formSubmit}
            onReset={this.formReset}
          >
            {/*  <AtInput
              name='value'
              title='头像 '
              type='text'
              value={this.state.value}
              onChange={this.handleChangeAvatar.bind(this)}
              placeholder='icon'
              className='input'
            /> */}
            <View>
              <AtInput
                name='value'
                title='姓名 '
                type='name'
                value={this.props.name}
                onChange={this.handleChangeName.bind(this)}
                placeholder=''
                className='input'
              />
            </View>
            <AtInput
              className='input'
              type='number'
              title='手机号'
              value={this.props.mobile}
              onChange={this.handleChangeNumber.bind(this)}
              placeholder=''
            />
            <AtInput
              className='input'
              title='证件号'
              value={this.props.id_card}
              onChange={this.handleChangeIdCard.bind(this)}
              placeholder=''
            />
            <AtInput
              className='input'
              type='digit'
              title='所属单位'
              value={this.props.unit}
              onChange={this.handleChangeUnit.bind(this)}
              placeholder=''
            />
            <AtButton className='btn-max-w' type='primary'>
              保存
            </AtButton>
            {/* <AtButton onClick={this.toHome} className='btna' type='primary'>ToHome</AtButton> */}
          </AtForm>
        </View>
      </View>
    )
  }

  toHome() {
    Taro.navigateTo({
      url: '/pages/home/index'
    })
  }
}
