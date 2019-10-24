/* eslint-disable react/no-unused-state */
/* eslint-disable taro/duplicate-name-of-state-and-props */
import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker } from '@tarojs/components'
import { AtButton, AtForm, AtInput } from 'taro-ui'
import './index.scss'

import Request from '../../utils/request'

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
    selector: ['家电', '家居', '建材', '其他', '快递'],
    index: 1,
    remark: '已与客户约定派送时间，同意代为签收'
  }

  constructor() {}

  confirmDeposit = () => {
    console.log('confirm deposite')
    Request({
      url: `/depositor/check-in`,
      method: 'POST',
      data: {
        recipients_name: this.state.recipients_name,
        recipients_mobile: this.state.recipients_mobile,
        name: Number(this.state.index + 1),
        remark: this.state.remark
      }
    })
    Taro.navigateTo({
      url: '/pages/success/index'
    })
  }
  getrecipients_name = event => {
    this.setState({
      recipients_name: event
    })
  }
  getrecipients_mobile = event => {
    console.log(event)
    this.setState({
      recipients_mobile: event
    })
  }
  get_all_info = event => {
    console.log('remarks information')
    this.setState({
      remark: event
    })
  }
  getname = event => {
    const index = event.detail.value
    const value = this.state.selector[index]
    /* console.log(value)
    console.log(Number(index + 1)) */
    const indexs = Number(index) + 1
    console.log('indexs is =>' + indexs)

    this.setState({
      selectorChecked: value,
      index: indexs
    })
  }

  toUserInfoPage = () => {
    Taro.navigateTo({
      url: '/pages/userInfo/index'
    })
  }

  componentDidMount() {}

  render() {
    return (
      <View className='index'>
        <Text className='title'>寄存登记</Text>
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
                value={this.state.recipients_name}
                onChange={this.getrecipients_name}
                placeholder='请输入收件人信息'
                className='input'
              />
            </View>
            <View>
              <AtInput
                className='input'
                type='number'
                title='联系人:'
                placeholder='请输入联系人电话'
                value={this.state.recipients_mobile}
                onChange={this.getrecipients_mobile.bind(this)}
              />
            </View>
            <View className='page-section'>
              <Picker
                className='input'
                mode='selector'
                range={this.state.selector}
                onChange={this.getname.bind(this)}
              >
                <View className='picker'>
                  <Text className='txt'>寄存物品: </Text>
                  {this.state.selectorChecked}
                </View>
              </Picker>
            </View>
            <AtInput
              className='input'
              title='备注:'
              placeholder='请输入寄件描述'
              onChange={this.get_all_info}
            />
            <AtButton
              onClick={this.confirmDeposit}
              className='btn-max-w'
              type='primary'
            >
              确认
            </AtButton>
            <AtButton onClick={this.toUserInfoPage.bind(this)}>
              寄存查询
            </AtButton>
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
