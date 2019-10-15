/* eslint-disable react/no-unused-state */
/* eslint-disable taro/duplicate-name-of-state-and-props */
import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker } from '@tarojs/components'
import { AtButton, AtForm, AtInput, AtDivider } from 'taro-ui'
import './index.scss'

@connect(({ deposit }) => ({
  ...deposit
}))
export default class Home extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '快件登记页面'
  }
  state = {
    recipients_name: '',
    recipients_mobile: '',
    name: '',
    selectorChecked: '家电',
    selector: ['家电', '家居', '建材', '其他'],
    index: 0
  }
  handleChange(value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  /*  onChange = e => {
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
  } */
  confirmDeposit = () => {
    console.log('apo')
    this.props.dispatch({
      type: 'deposit/deposit',
      payload: {
        recipients_name: this.props.recipients_name,
        recipients_mobile: this.props.recipients_mobile,
        name: this.state.index
      }
    })
  }
  getrecipients_name = event => {
    this.props.dispatch({
      type: 'deposit/save',
      payload: { recipients_name: event }
    })
  }
  getrecipients_mobile = event => {
    this.props.dispatch({
      type: 'deposit/save',
      payload: { recipients_mobile: event }
    })
  }
  getname = event => {
    const index = event.detail.value
    const value = this.props.selector[index]
    console.log(value) // 家居，建材等可以打印出来
    this.setState({
      selectorChecked: value,
      index: index
    })
  }

  componentDidMount() {}

  render() {
    return (
      <View className='index'>
        <Text className='title'>寄存登记</Text>
        {/* <Text className='iconfont'>\e661</Text> */}
        <View className='formWrap'>
          <AtForm
            className='form'
            onSubmit={this.formSubmit}
            onReset={this.formReset}
          >
            <View>
              <AtInput
                name='value'
                title='收件人: '
                type='text'
                value={this.props.recipients_name}
                onChange={this.getrecipients_name.bind(this)}
                placeholder='请输入收件人信息'
                className='input'
              />
            </View>
            <AtInput
              className='input'
              type='number'
              title='联系人:'
              placeholder='请输入联系人电话'
              value={this.props.recipients_mobile}
              onChange={this.getrecipients_mobile.bind(this)}
            />
            <View className='page-section'>
              <View>
                <Picker
                  className='input'
                  mode='selector'
                  range={this.props.selector}
                  onChange={this.getname.bind(this)}
                >
                  <View className='picker'>
                    <Text>寄存物品: </Text>
                    {this.state.selectorChecked}
                  </View>
                </Picker>
              </View>
            </View>
            <AtDivider content='' />
            <AtInput
              className='input'
              title='备注:'
              placeholder='请输入寄件描述'
            />
            <AtButton
              onClick={this.confirmDeposit}
              className='btn-max-w'
              type='primary'
            >
              确认
            </AtButton>
            <View className='btn-max-y'>
              <Text>寄存查询</Text>
            </View>
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
