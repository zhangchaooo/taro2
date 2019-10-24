import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './index.scss';

export default class Img extends Component {

  static defaultProps = {
    type: 'image', // avatar
    src: '',
    size: '80px',
    width: '100%',
    height: '200px',
    mode: 'aspectFill'
    // scaleToFill	缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素	
    // aspectFit	缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。	
    // aspectFill	缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。	
    // widthFix	缩放模式，宽度不变，高度自动变化，保持原图宽高比不变	
    // top	裁剪模式，不缩放图片，只显示图片的顶部区域	
    // bottom	裁剪模式，不缩放图片，只显示图片的底部区域	
    // center	裁剪模式，不缩放图片，只显示图片的中间区域	
    // left	裁剪模式，不缩放图片，只显示图片的左边区域	
    // right	裁剪模式，不缩放图片，只显示图片的右边区域	
    // top left	裁剪模式，不缩放图片，只显示图片的左上边区域	
    // top right	裁剪模式，不缩放图片，只显示图片的右上边区域	
    // bottom left	裁剪模式，不缩放图片，只显示图片的左下边区域	
    // bottom right	裁剪模式，不缩放图片，只显示图片的右下边区域
  }

  state = {
    s_loading: true,
    s_error: false,
  }

  // componentDidMount(props) {
  //   const { src } = this.props; // 未知原因无法劫持 props
  //   this.setState({ s_src: src });
  // }
  
  handleLoad(e) {
    this.setState({ s_loading: false });
  }

  hanldeError(e) {
    this.setState({ 
      s_loading: false,
      s_error: true,});
  }
  
  render() {
    let { type, size, mode, height, width, src } = this.props;
    let { s_error, s_loading } = this.state
    // s_src += '?imageView2/1/w/400';
    let h = height;
    let w = width;
    if (type === 'avatar') {
      h = size;
      w = size;
    } else if (mode === 'widthFix') {
      h = 'auto';
      w = '100%';
    }
    let borderRadius = 
      type === 'avatar'
        ? '50%'
        : 0
    
    let sLoadingBg = 
      s_loading 
      ? { background: '#f1f1f1' }
      : {}
    src = s_error
      ? 'data:image/png;base64,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'
      : src
    return (
      <View
        className='Img'
        style={{
          overflow: 'hidden',
          borderRadius,
          width: w,
          height: h,
        }}
      >
        <Image
          style={{
            width: w,
            height: h,
            borderRadius,
            ...sLoadingBg
          }}
          mode={mode}
          src={src}
          onLoad={this.handleLoad.bind(this)}
          onError={this.hanldeError.bind(this)}
          lazyLoad
        />
      </View>
    )
  }
}
