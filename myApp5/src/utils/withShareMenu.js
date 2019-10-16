import Taro from '@tarojs/taro';
// import { connect } from '@tarojs/redux';
// import defaultShareImg from 'xxx.jpg';

function withShareMenu(opts = {}) {
  
  // 设置默认
  const defalutPath = 'pages/index/index?';
  const defalutTitle = '默认标题';
  // const defaultImageUrl = defaultShareImg;

  return function demoComponent(Component) {      
 
    class WithShareMenu extends Component {
      async componentWillMount() {
        wx.showShareMenu({
          withShareTicket: true
        });

        if (super.componentWillMount) {
          super.componentWillMount();
        }
      }

      // 点击分享的那一刻会进行调用
      onShareAppMessage() {

        let { title, imageUrl, path = null } = opts;

        this.setState({ showShare: false });

        
        if (this.$setShareData && typeof this.$setShareData === 'function') {
          return this.$setShareData();
        }

        if (!path) {
          path = defalutPath;
        }
		
        // 每条分享都补充用户的分享id
        // 如果path不带参数，分享出去后解析的params里面会带一个{''： ''}
        // const sharePath = `${path}&shareFromUser=${userInfo.shareId}`; 

        return {
          title: title || defalutTitle,
          path: path,
          imageUrl: imageUrl
        };
      }

      render() {
        return super.render();
      }
    }

    return WithShareMenu;
  };
}

export default withShareMenu;
