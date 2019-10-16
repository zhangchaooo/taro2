import Taro from '@tarojs/taro'

export function navigateTo (url) {
  // if (!Taro.getStorageSync('access_token')) {
  //   return _this.setState({ isShowModal: true, url });
  // }
  Taro.navigateTo({ url })
}
