import Taro from '@tarojs/taro'
import { userRegister } from '../_service/register'

export default {
  namespace: 'register',
  state: {
    head_image:
      'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=05b9edbbaed3fd1f2204aa6851274e7a/1ad5ad6eddc451da06f9727eb0fd5266d0163213.jpg',
    files: [
      {
        url:
          'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=05b9edbbaed3fd1f2204aa6851274e7a/1ad5ad6eddc451da06f9727eb0fd5266d0163213.jpg'
      },
      {
        url:
          'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=05b9edbbaed3fd1f2204aa6851274e7a/1ad5ad6eddc451da06f9727eb0fd5266d0163213.jpg'
      },
      {
        url:
          'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=05b9edbbaed3fd1f2204aa6851274e7a/1ad5ad6eddc451da06f9727eb0fd5266d0163213.jpg'
      }
    ],
    name: 'jacson',
    sex: 1,
    mobile: '13263253698',
    id_card: '160354199810230654',
    unit: '顺丰',
    chooseImg: {
      files: [],
      showUploadBtn: true,
      upLoadImg: []
    },
    files: [],
    visible: false,
    imgUrl: '',
    visible: ''
  },

  effects: {
    *userRegister({ payload }, { call }) {
      // console.log(2)
      const res = yield call(userRegister, payload)
      console.log(res)

      /* if (res.code === 0) {
        Taro.setStorageSync('access_token', res.data.access_token)
      }
      if (callback) callback(res) */
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
