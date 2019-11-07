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
    navigationBarTitleText: '快件登记'
  }
  state = {
    community_name: [],
    community_id: [],
    recipients_name: '',
    recipients_mobile: '',
    name: '',
    selectorChecked: '家电',
    selectorCheckedCommunity: '金座伊方锦',
    selector: ['家电', '家居', '建材', '其他', '快递'],
    index: 1,
    remark: '已与客户约定派送时间，同意代为签收',
    community_id_selected: 1
  }

  constructor() {}

  confirmDeposit = () => {
    /*  console.log('confirm deposite') */
    Request({
      url: `/depositor/check-in`,
      method: 'POST',
      data: {
        community_id: this.state.community_id_selected,
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
    /*  console.log(event) */
    this.setState({
      recipients_mobile: event
    })
  }
  get_all_info = event => {
    /* console.log('remarks information') */
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
    /* console.log('indexs is =>' + indexs) */

    this.setState({
      selectorChecked: value,
      index: indexs
    })
  }
  getCommunity_name = event => {
    /* console.log('inin') */

    const index = event.detail.value
    const value = this.state.community_name[index]
    /*  console.log('value', value) */
    /* console.log(Number(index + 1)) */
    const indexs = Number(index)
    /* console.log('indexs is =>' + indexs)
    console.log('ida', this.state.community_id[indexs]) */
    const community_id_selected = this.state.community_id[indexs]

    this.setState({
      selectorCheckedCommunity: value,
      index: indexs,
      community_id_selected
    })
  }

  toUserInfoPage = () => {
    Taro.navigateTo({
      url: '/pages/userInfo/index'
    })
  }

  getCommunityInfo = () => {
    /* console.log('community') */
    Request({
      url: `/community/list`,
      method: 'GET'
    }).then(res => {
      /* console.log(res) */
      let community_name = []
      let community_id = []

      res.map(item => {
        community_name.push(item.name)
        community_id.push(item.id)
      })
      /*  console.log('aaa', community_name, community_id) */

      this.setState({
        community_id,
        community_name
      })
    })
  }

  componentDidMount() {
    this.getCommunityInfo()
  }

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
            <View className='page-section'>
              <Picker
                className='input'
                mode='selector'
                range={this.state.community_name}
                onChange={this.getCommunity_name.bind(this)}
              >
                <View className='picker'>
                  <Text className='txt'>社区名称: </Text>
                  {this.state.selectorCheckedCommunity}
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
            <AtButton
              className='btn-max-y'
              type='primary'
              onClick={this.toUserInfoPage.bind(this)}
            >
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
