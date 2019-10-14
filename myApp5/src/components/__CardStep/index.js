import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import Img from '../_Img';
import './index.scss';

export default class CardStep extends Component {
  static defaultProps = {
    data:{
      title: '',
      image_url: '',
      is_finish: 1,
      finish_ratio: 0,
      target_number: 0,
      noFinish: 1,
      imgH: null,
      feedback: null
    }
  }

  render() {
    const {
      data:{title,image_url,is_finish,finish_ratio,target_number,noFinish,imgH,feedback},
    } = this.props;

    const titleStyle = {
        overflow:'hidden',
      textOverflow: 'ellipsis',
      height: '20px',
      whiteSpace: 'nowrap',
      }
    const sProgress = {
      height:'8px',
      borderRadius:'4px',
    }
    const sProgressOut = {
      border:'1px solid rgba(255,144,0,1)',
      width: '70%',
      overflow: 'hidden'
    }
    const sProgressIn = {
      height:'6px',
      borderRadius:'3px',
      background:'rgba(255,144,0,1)',
      width: 100 * Number(finish_ratio) + '%',
    }
    return (
      <View className='CardStep'>
        <View
          className='bg-w of-h'
        >
          <View className='pos-r' style={{height: imgH,}}>
            <Img
              height={imgH}
              src={image_url}
            ></Img>
            {!noFinish && 
            <View 
              style={{right:'8px',top:'10px', padding:'4px 8px',borderRadius:'12px',background:'rgba(51,51,51,0.5)'}} 
              className='pos-a c-w fs-22'>
              {feedback
                  ? '执行完成'
                  :is_finish=='false'
                ? '捐步中'
                : '已完成'
              }
            </View>}
          </View>
          
        

          <View className='p-32'>
            <View
              className='mb-10 c-333 fw-400'
              style={titleStyle}
            >{title}</View>
            <View className='flex fai-c mb-10'>
              <View style={{...sProgress, ...sProgressOut}}>
                <View style={{...sProgress, ...sProgressIn}}></View>
              </View>
              <View style={{marginLeft:'23px'}} className='c-999 fs-24'>已完成{(Number(finish_ratio)*100).toFixed(0)}%</View>
            </View>
            <View className='fw-500'>目标步数：{target_number}步</View>
          </View>
        </View>
      </View>
    )
  }
}
