import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Picker } from '@tarojs/components'
import { AtButton, AtAvatar, AtForm, AtInput, AtImagePicker } from 'taro-ui'
import Request from '../../utils/request'

import ChooseImage from '../../components/ChooseImage'

import './index.scss'

@connect(({ register }) => ({
  ...register
}))
export default class Index extends Component {
  // eslint-disable-next-line react/sort-comp

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '注册'
  }
  constructor() {
    super(...arguments)
  }
  state = {
    selector: ['男', '女'],
    selectorChecked: '女',
    value: '',
    name: 'lihua',
    sex: 1,
    mobile: '13263253698',
    id_card: '160354199810230654',
    unit: '顺丰',
    files: [
      {
        url: ''
      }
    ],
    visible: false,
    imgUrl: '',
    head_image:
      'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=05b9edbbaed3fd1f2204aa6851274e7a/1ad5ad6eddc451da06f9727eb0fd5266d0163213.jpg'
    /* http://source.qunarzz.com/common/hf/logo.png */
  }

  handleChange() {}

  getSex = event => {
    console.log(Number(event.detail.value) + 1)

    this.setState({
      sex: Number(event.detail.value) + 1,
      selectorChecked: this.state.selector[event.detail.value]
    })
  }

  getMobile = event => {
    this.setState({
      sex: event
    })
  }

  getIdCard = event => {
    this.setState({
      id_card: event
    })
  }

  getName(e) {
    this.setState({
      name: e
    })
  }

  getUnit = event => {
    this.setState({
      unit: event
    })
  }

  userRegister = () => {
    Request({
      url: `/depositor/update`,
      method: 'POST',
      data: {
        head_image: this.state.head_image,
        name: this.state.name,
        sex: this.state.sex,
        id_card: this.state.id_card,
        mobile: this.state.mobile,
        id_card: this.state.id_card,
        unit: this.state.unit
      }
    })
    Taro.navigateTo({
      url: '/pages/home/index'
    })
  }

  onChangeFile(files) {}
  onFail(mes) {
    console.log(mes)
  }
  onImageClick(index, file) {
    console.log(index, file)
  }

  toUpload = () => {
    console.log('upload')
    console.log(this)
    Taro.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['camera', 'album'],
      success: res => {
        const FileSystemManager = wx.getFileSystemManager()
        FileSystemManager.readFile({
          filePath: res.tempFilePaths[0],
          encoding: 'base64',
          success: ({ data }) => {
            /* console.log('base 64 is =>' + data) */
            // success => do something
            const datab = 'data:image/jpeg;base64,' + data
            Taro.uploadFile({
              header: {
                'content-type': 'multipart/form-data'
              },
              url:
                'https://service-dpxp29he-1259676554.gz.apigw.tencentcs.com/test/v1/aggregation/image-upload', //仅为示例，非真实的接口地址
              filePath: res.tempFilePaths[0],
              name: 'file',
              formData: {
                base_img: datab
              }
            }).then(res => {
              console.log('happy =>', res)

              if (res.statusCode === 200) {
                console.log(this)
                const dataUrl = JSON.parse(res.data).file_url
                console.log('successUrl is => ' + dataUrl)
                this.setState({
                  head_image: dataUrl
                })
              }
            })
          },
          fail: function(err) {
            console.log(err)
          }
        })
      },
      fail: function(err) {
        console.log(err)
      }
    })
  }

  getMyAvatar = () => {
    /* console.log('获得我的头像~~')
    this.props.dispatch({
      type: 'register/getMyAvatar'
    }) */
    Request({
      url: `/depositor/show`,
      method: 'GET'
    }).then(res => {
      /* console.log(res.depositor_wechat_user.head_image) */
      this.setState({
        head_image: res.depositor_wechat_user.head_image
      })
    })
  }

  componentDidMount() {
    this.getMyAvatar()
  }

  render() {
    return (
      <View className='index'>
        <View className='uploadAvatar' onClick={this.toUpload}>
          <AtAvatar
            size='large'
            circle
            image={this.state.head_image}
          ></AtAvatar>
        </View>
        {/*  <View className='uploadBtn'>
          <AtButton type='primary' onClick={this.toUpload}>
            点击更换头像
          </AtButton>
        </View> */}
        <View className='formWrap'>
          <AtForm className='form'>
            <View>
              <AtInput
                title='姓名: '
                type='text'
                placeholder='橘右京'
                className='input'
                // eslint-disable-next-line react/jsx-no-duplicate-props
                value={this.state.name}
                onChange={this.getName.bind(this)}
              />
            </View>

            <View className='page-section'>
              <View>
                <Picker
                  className='input'
                  mode='selector'
                  range={this.state.selector}
                  onChange={this.getSex.bind(this)}
                  value={this.state.sex}
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
              value={this.state.mobile}
              onChange={this.getMobile}
            />
            <AtInput
              className='input'
              title='证件号:'
              placeholder='132325198836522301'
              value={this.state.id_card}
              onChange={this.getIdCard}
            />
            <AtInput
              className='input'
              type='text'
              title='所属单位:'
              placeholder='顺丰快递'
              value={this.state.unit}
              onChange={this.getUnit}
            />
            <AtButton
              onClick={this.userRegister}
              className='btn-max-w'
              type='primary'
            >
              登录/注册
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
