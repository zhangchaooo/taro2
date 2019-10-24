import Taro from '@tarojs/taro'
import { loadList } from './loadList'

function withLoad(opts = {}) {
  // 设置默认
  // const defalutPath = 'pages/index/index?';
  let { type, type_d, listProp, limit, key, isRows, isScrollView } = opts
  let keyVal = null

  return function demoComponent(Component) {
    // @connect(({ user }) => ({
    // }))
    class WithLoad extends Component {
      state = {
        page: 1,
        noMore: false,
        noData: false,
        loading: true,
        mLoading: false,
        state: 1,
        ...this.state
      }

      componentDidMount() {
        // 获取 参数 （优先级最高）
        if (this.$setPayloadKey && typeof this.$setPayloadKey === 'function') {
          keyVal = this.$setPayloadKey()
        }
        // if (this.$setPayloadType &&  typeof this.$setPayloadType === 'function') {
        //   type = this.$setPayloadType();
        // }
        // 请求数据
        // if(type_d) {
        //   this.props.dispatch({
        //     type: type_d
        //   })
        // }
        loadList({
          _this: this,
          type,
          [isRows ? 'rows' : 'limit']: limit,
          key,
          keyVal,
          state: 1
          // cb: (res) => cbFn(res)
        })
        if (super.componentDidMount) {
          super.componentDidMount()
        }
      }

      reachBottom() {
        if (this.$setPayloadKey && typeof this.$setPayloadKey === 'function') {
          keyVal = this.$setPayloadKey()
        }
        const { list, total } = this.props[listProp]
        /* console.log(2222222) */

        if (!list) return
        if (list.length >= total) return
        this.setState({ mLoading: true })
        const { page } = this.state
        loadList({
          _this: this,
          type,
          [isRows ? 'rows' : 'limit']: limit,
          key,
          keyVal,
          page: page + 1,
          state: 1,
          cb: res => {
            /* console.log('cb res is =>', res) */
            this.setState({ page: page + 1 })
          }
        })
      }

      onReachBottom() {
        if (isScrollView) return
        this.reachBottom()
      }

      onScrollToLower() {
        if (isScrollView) this.reachBottom()
      }

      onPullDownRefresh() {
        if (this.$setPayloadKey && typeof this.$setPayloadKey === 'function') {
          keyVal = this.$setPayloadKey()
        }

        loadList({
          _this: this,
          type,
          [isRows ? 'rows' : 'limit']: limit,
          key,
          keyVal,
          cb: res => {
            Taro.stopPullDownRefresh()
            this.setState({ page: 1, noMore: false })
          }
        })
      }

      render() {
        return super.render()
      }
    }

    return WithLoad
  }
}

export default withLoad
