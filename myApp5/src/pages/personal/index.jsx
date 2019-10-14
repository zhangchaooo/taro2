import Taro, { Component } from '@tarojs/taro'
import { View, Image, Form, Input, Button } from '@tarojs/components'
import { AtButton, AtAvatar, AtForm, AtInput, AtDivider } from 'taro-ui'
import './index.scss'

export default class Home extends Component {
  config = {
    navigationBarTitleText: 'Home'
  }
  state = {
    selector: ['家电', '家居', '建材', '其他'],
    selectorChecked: '快递',
    timeSel: '12:01',
    dateSel: '2018-04-22',
    value: ''
  }
  handleChange(value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        {/* <AtAvatar circle  className='image'></AtAvatar> */}
        <Text className='text-pesonal'>个人资料</Text>
        <View className='formWrap'>
          <AtForm
            className='form'
            onSubmit={this.formSubmit}
            onReset={this.formReset}
          >
            <AtInput
                name='value'
                title='头像 '
                type='text'
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                placeholder='icon'
                className='input'
              />
            <View>
              <AtInput
                name='value'
                title='姓名 '
                type='text'
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                placeholder='橘右京'
                className='input'
              />
            </View>
            <AtInput
              className='input'
              type='number'
              title='手机号'
              placeholder='13684896324'
            />
            <AtInput
              className='input'
              title='证件号'
              placeholder='132325198836522301'
            />
            <AtInput
              className='input'
              type='digit'
              title='所属单位'
              placeholder='顺丰快递'
            />
            <AtButton className='btn-max-w' type='primary'>按钮</AtButton>
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

