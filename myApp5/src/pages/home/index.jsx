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
      <View className="index">
        <Text className="title">寄存登记</Text>
        {/* <Text className='iconfont'>\e661</Text> */}
        <View className="formWrap">
          <AtForm
            className="form"
            onSubmit={this.formSubmit}
            onReset={this.formReset}
          >
            <View>
              <AtInput
                name="value"
                title="收件人: "
                type="text"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                placeholder="请输入收件人信息"
                className="input"
              />
            </View>

            {/* <AtInput
              className='input'
              type='text'
              title='性别'
              placeholder='男'
            /> */}
            <AtInput
              className="input"
              type="number"
              title="联系人:"
              placeholder="请输入联系人电话"
            />
            <View className="page-section">
              <View>
                <Picker
                  className="input"
                  mode="selector"
                  range={this.state.selector}
                  onChange={this.onChange}
                >
                  <View className="picker">
                    <Text>寄存物品: </Text>
                    {this.state.selectorChecked}
                  </View>
                </Picker>
              </View>
            </View>
            <AtDivider content="" />
            <AtInput
              className="input"
              title="备注:"
              placeholder="请输入寄件描述"
            />
            <AtButton className="btn-max-w" type="primary">
              确认
            </AtButton>
            <View className="btn-max-y">
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
