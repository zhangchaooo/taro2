import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker, Image, Form, Switch, Input } from '@tarojs/components'
import { AtButton, AtForm, AtInput, AtToast, AtTextarea } from 'taro-ui'
import './index.scss'
import Recieve from '../../images/express/Group Copy@2x.png'
import Mail from '../../images/express/360fba096317fb5123b079495145a54.png'
import linePic from '../../images/express/copy 7@3x.png'

import Request from '../../utils/request'

@connect(({ deposit }) => ({
  ...deposit
}))
export default class Home extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '寄存'
  }

  state = {
    selector: ['金座伊方锦', '万树香堤', '金色家园', '蓝灵家园'],
    selectorChecked: '金座伊方锦',
    selector2: ['快递', '大件', '小件', '物品'],
    selectorChecked2: '快递',
    value: ''
  }

  constructor() { }


  componentDidMount () {
  }

  render () {
    return (
      <View className='index'>
        <View className='form_one_wrap'>
          <View className='atform_input_first'>
            <Image
              style='width: 25px;height: 30px;'
              src={Mail}
            />
            <Input placeholder="徐尚 130000000000000002"></Input>
          </View>
          <View className='bottom_line'></View>
          <View className='atform_input_second'>
            <Image
              style='width: 25px;height: 30px;'
              src={Recieve}
            />
            <Input placeholder="点击编辑收件人信息"></Input>
          </View>
        </View>
        <AtForm className='atform2'>

          <View className='page-section'>
            <Text>寄存社区</Text>
            <View>
              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                <View className='picker'>
                  {this.state.selectorChecked}
                </View>
              </Picker>
              <View className='jiantou1'><Image style={'width:10px;height:10px;'} src={linePic} /></View>
            </View>
          </View>
          <View className='bottom_line'></View>
          <View className='page-section'>
            <Text>寄存物品</Text>
            <View>
              <Picker mode='selector' range={this.state.selector2} onChange={this.onChange}>
                <View className='picker'>
                  {this.state.selectorChecked2}
                </View>
              </Picker>
              <View className='jiantou2' ><Image style={'width:10px;height:10px;'} src={linePic} /></View>
            </View>
          </View>

        </AtForm >
        <AtForm className='atform3'>
          <View className='text'>
            <Text style='font-size:15px; padding-left:38px;'>备注信息</Text>
          </View>
          <AtTextarea
            value={this.state.value}
            maxLength={200}
            placeholder='你的问题是...'
          />

        </AtForm>
        <View type='primary' size='normal' className='Btn'><AtButton>确认</AtButton></View>

      </View>
    )
  }

}
