import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker } from '@tarojs/components'
import { AtButton, AtAvatar, AtForm, AtInput } from 'taro-ui'

import './index.scss'

@connect(({ home }) => ({
  ...home
}))
export default class Index extends Component {
  // eslint-disable-next-line react/sort-comp

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    selector: ['男', '女'],
    selectorChecked: '女',
    value: '',
    head_image: this.state.head_image
    /* name: '',
    sex: '',
    mobile: '',
    id_card: '',
    unit: '' */
  }

  handleChange() {}

  onChange() {}

  getName = event => {
    const value = event.target.value
    this.props.dispatch({
      type: 'register/save',
      payload: { name: value }
    })
  }

  getSex = event => {
    const value = event.target.value
    this.props.dispatch({
      type: 'register/save',
      payload: { sex: value }
    })
  }

  getMobile = event => {
    const value = event.target.value
    this.props.dispatch({
      type: 'register/save',
      payload: { mobile: value }
    })
  }

  getIdCard = event => {
    const value = event.target.value
    this.props.dispatch({
      type: 'register/save',
      payload: { id_card: value }
    })
  }

  getUnit = event => {
    const value = event.target.value
    this.props.dispatch({
      type: 'register/save',
      payload: { unit: value }
    })
  }

  userRegister = () => {
    this.props.dispatch({
      type: 'register/userRegister',
      payload: {
        head_image: this.props.head_image,
        name: this.props.name,
        sex: this.props.sex,
        mobile: this.props.mobile,
        id_card: this.props.id_card,
        unit: this.props.unit
      }
    })
    console.log(1)
  }

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
                // eslint-disable-next-line react/jsx-no-duplicate-props
                value={this.props.name}
                onInput={this.getName}
              />
            </View>

            <View className='page-section'>
              <View>
                <Picker
                  className='input'
                  mode='selector'
                  range={this.state.selector}
                  onChange={this.onChange.bind(this)}
                  value={this.props.sex}
                  onInput={this.getSex}
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
              value={this.props.mobile}
              onInput={this.getMobile}
            />
            <AtInput
              className='input'
              title='证件号:'
              placeholder='132325198836522301'
              value={this.props.id_card}
              onInput={this.getIdCard}
            />
            <AtInput
              className='input'
              type='digit'
              title='所属单位:'
              placeholder='顺丰快递a'
              value={this.props.unit}
              onInput={this.getUnit}
            />
            <AtButton
              onClick={this.userRegister}
              className='btn-max-w'
              type='primary'
            >
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
