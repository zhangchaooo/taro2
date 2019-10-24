import Taro from '@tarojs/taro';

function withShare(opts = {}) {

  return function demoComponent(Component) {
    class WithShare extends Component {
      state = {
        config: null,
        shareImage: null,
        canvasStatus: false,
        showPreview: false,
        ...this.state
      }


      // 调用绘画 => canvasStatus 置为true、同时设置config
      canvasDrawFunc = (config) => {
        this.setState({
          canvasStatus: true,
          config: config,
          showShare: false
        })
        Taro.showLoading({
          title: '绘制中...'
        })
      }
      // 绘制成功回调函数 （必须实现）=> 接收绘制结果、重置 TaroCanvasDrawer 状态
      onCreateSuccess = (result) => {
        const { tempFilePath, errMsg } = result;
        Taro.hideLoading();
        if (errMsg === 'canvasToTempFilePath:ok') {
          this.setState({
            shareImage: tempFilePath,
            showPreview: true,
            // 重置 TaroCanvasDrawer 状态，方便下一次调用
            canvasStatus: false,
            config: null
          })
        } else {
          // 重置 TaroCanvasDrawer 状态，方便下一次调用
          this.setState({
            canvasStatus: false,
            config: null
          })
          console.log(errMsg);
          Taro.showToast({ icon: 'none', title: errMsg || '出现错误' });
        }
        // 预览
        // Taro.previewImage({
        //   current: tempFilePath,
        //   urls: [tempFilePath]
        // })
      }
      // 绘制失败回调函数 （必须实现）=> 接收绘制错误信息、重置 TaroCanvasDrawer 状态
      onCreateFail = (error) => {
        console.log(error);
        Taro.hideLoading();
        // 重置 TaroCanvasDrawer 状态，方便下一次调用
        this.setState({
          canvasStatus: false,
          config: null
        })
      }
        // 保存图片至本地
      saveToAlbum = () => {
        Taro.saveImageToPhotosAlbum({
          filePath: this.state.shareImage,
          success: (res) => {
            if (res.errMsg === 'saveImageToPhotosAlbum:ok') {
              Taro.showToast({
                title: '保存图片成功',
                icon: 'success',
                duration: 1500,
              });
              setTimeout(() => {
                this.cancelPreview()
              }, 1500)
            }
          }
        });
      }

      cancelPreview() {
        this.setState({ showPreview: false, });
      }

      render() {
        return super.render();
      }
    }

    return WithShare;
  };
}

export default withShare;

