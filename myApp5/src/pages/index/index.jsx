import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import { AtButton, AtAvatar, AtForm, AtInput } from 'taro-ui'

import './index.scss'

export default class Index extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    selector: ['男', '女'],
    selectorChecked: '女',
    value: ''
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleChange() {}

  onChange() {}

  render() {
    return (
      <View className='index'>
        <AtAvatar circle className='image'></AtAvatar>
        <View className='formWrap'>
          <AtForm className='form'>
            <View>
              <AtInput
                name='value'
                title='姓名: '
                type='text'
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                placeholder='橘右京'
                className='input'
              />
            </View>

            <View className='page-section'>
              <View>
                <Picker
                  className='input'
                  mode='selector'
                  range={this.state.selector}
                  onChange={this.onChange.bind(this)}
                >
                  <View className='picker'>
                    <Text>性别: </Text>
                    {this.state.selectorChecked}
                  </View>
                </Picker>
              </View>
            </View>
            <AtInput
              className='input'
              type='number'
              title='手机号:'
              placeholder='13684896324'
            />
            <AtInput
              className='input'
              title='证件号:'
              placeholder='132325198836522301'
            />
            <AtInput
              className='input'
              type='digit'
              title='所属单位:'
              placeholder='顺丰快递a'
            />
            <AtButton className='btn-max-w' type='primary'>
              按钮
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
