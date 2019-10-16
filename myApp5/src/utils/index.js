import Taro from '@tarojs/taro'

export function showToast (msg) {
  Taro.showToast({
    title: msg,
    icon: 'none'
  })
}


export function authReLaunch ({path,failCb}) {
  const token = Taro.getStorageSync('access_token');
  if (!token) return failCb && failCb();
  Taro.reLaunch({ url: path })
 }


export function authNav ({path,failCb}) {
 const token = Taro.getStorageSync('access_token');
 if (!token) return failCb && failCb();
 Taro.navigateTo({ url: path })
}


export function uploadAndDonateStep (_this) {
  const { dispatch } = _this.props;
  Taro.getSetting({
    success: function (__res) {
      const scope_werun = __res.authSetting['scope.werun']
      if (scope_werun === false) {
        // console.log('werun false');
        return Taro.showModal({
          title: '提示',
          content: '您未开通微信运动，请开通微信运动后重试',
          success: function (___res) {
            if (___res.confirm) {
              //跳转去设置
              wx.openSetting({
                success: function () {
                }
              })
            } else {
              //不设置
            }
          }
        })
      } else if (scope_werun === true || scope_werun === undefined) {
        // console.log('werun true || undefined');
        Taro.authorize({
          scope: 'scope.werun',
          success: () => {
            Taro.getWeRunData({
              success: function (___res) {
                // console.log("appid:" + appid + "session_key:" + session_key + "encryptedData:" + res.encryptedData + "iv:" + res.iv);
                const { encryptedData, iv } = ___res;
                dispatch({
                  type: 'home/userUpload_step',
                  payload: {
                    encryptedData,
                    iv,
                  },
                  callback: (____res) => {
                    if (____res.code == 0 || ____res.code == 200) {

                      dispatch({
                        type: 'home/userCan_step',
                        callback: (res) => {
                          if(res.code ==0 ) {
                            const { step_num } = res.data
                            if (step_num == 0) {
                              return showToast('今日已捐步')
                            }
                            Taro.showModal({
                              title: '提示',
                              content: '您有'+step_num+'步，'+'确定捐步吗？',
                              success: (res) => {
                                if (res.confirm) {
                                  dispatch({
                                    type: 'home/userStepDonate',
                                    payload: { step_number: step_num, id: _this.id },
                                    callback: (res) => {
                                      if (res.code == 0) {
                                        showToast('捐步成功')
                                        _this.initData(_this.id)
                                      } else {
                                        showToast(res.message)
                                      }
                                    }
                                  })
                                }
                              }
                            })
                          } else {
                            showToast('今日已捐步')
                          }
                        }
                      })
                    } else {
                      _this.setState({showLogin: true});
                    }
                  }
                })
              },
              fail: function () {
                // return Taro.showModal({
                //   title: '提示',
                //   content: '您未开通微信运动，请关注“微信运动”公众号，开通微信运动后重试',
                //   showCancel: false,
                //   confirmText: '知道了'
                // })
              }
            })
          }
        })

      }
    }
  })
}
