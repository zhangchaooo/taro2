import Taro from '@tarojs/taro'
import { loadList } from './loadList'

function withLoad(opts = {}) {
  // 设置默认
  // const defalutPath = 'pages/index/index?';
  let {
    type,
    type_d,
    listProp,
    limit,
    key,
    isRows,
    isScrollView,
    total,
    cb
  } = opts
  /*  let keyVal = null */

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
        /* state: 1, */
        ...this.state,
        total: 10,
        cb
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
          /* key, */
          /* keyVal, */
          /* state: 1, */
          cb: res => {
            console.log(
              'withLoad_start_res_loadlist.....................................',
              res
            )
            let {
              meta: {
                pagination: { total }
              }
            } = res
            console.log(
              'withLoad_loadlist_callback.........................................total',
              total
            )

            this.setState({
              total: total
            })
          }
        })
        if (super.componentDidMount) {
          super.componentDidMount()
        }
      }

      reachBottom() {
        console.log('reach_bottom')
        console.log('this.props', this.props)
        if (this.$setPayloadKey && typeof this.$setPayloadKey === 'function') {
          keyVal = this.$setPayloadKey()
        }
        let { list } = this.props[listProp]
        let { total } = this.state

        console.log(
          'reachBottom_total*****************************total',
          total
        )

        if (!list) return
        if (list.length >= total) {
          return
        } else {
          this.setState({ mLoading: true })
          let { page } = this.state
          loadList({
            _this: this,
            type,
            [isRows ? 'rows' : 'limit']: limit,
            /* key,
          keyVal, */
            page: page + 1,
            state: 1
            /* cb: res => {
            console.log('cb_withLoad res is =>', res)
            this.setState({ page: page + 1 })
          } */
          })
        }
      }

      onReachBottom() {
        console.log('onReachBottom')

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
            console.log('onPullDownRefresh', res)

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
