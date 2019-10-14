import Taro, { Component } from '@tarojs/taro';
import { View, Input, Radio, RadioGroup, Picker, Switch } from '@tarojs/components';
import './index.scss';

export default class FormItem extends Component {

  static defaultProps = {
    data: []
  }

  handleChange(name, e) {
    this.props.onChange(name, e)
    // const { data } = this.state;
    // const { target: { value } } = e;
    // const val =
    //   name == 'region'
    //     ? `${value[0]}-${value[1]}-${value[2]}`
    //     : value

    //     console.log(this.state);
    // this.setState({
    //   data: data.map(d=>{
    //     if (d.name == name) {
    //       d.value= val
    //     }
    //     return d
    //   })
    // });
  }

  render() {
    const { data } = this.props;

    return (
      <View className='FormItem bg-w'>
        {data.map(d=>{
          const {type, title, name, value, placeholder, data: _data, id} = d;

          return(
            <View
              key={id}
              className={`h-100 flex fai-c fjc-sb pr-30 ml-30 bb`}
            >
              {/* Title */}
              <View style={{width: '80px'}} className='mr-20 flex fai-c'>
                {title}
              </View>
              {/* Input ... */}
              <View className='fg-1 flex fd-rr fai-c ta-r'>
                {type == 'input' || type == 'inputNum'
                  ? <Input
                      className='w-f'
                      type={type == 'inputNum'?'number': 'text'}
                      value={value}
                      onInput={this.handleChange.bind(this, name)}
                      placeholder={placeholder}
                      placeholderClass='c-999'
                    />
                  : type == 'radio'
                    ? <RadioGroup
                        className='radio-group'
                        name={name}
                        className='radio-group'
                        onChange={this.handleChange.bind(this, name)}
                      >
                        <Radio
                          style="transform: scale(0.7); font-size: 20px"
                          color='#ED414A'
                          className='Radio'
                          checked={value==_data[0].value}
                          value='1'
                        >
                          {_data[0].title}
                        </Radio>
                        <Radio
                          style="transform: scale(0.7); font-size: 20px" 
                          color='#ED414A' 
                          className='Radio' 
                          checked={value==_data[1].value} 
                          value='2'
                        >
                          {_data[1].title}
                        </Radio>
                      </RadioGroup>
                    : type == 'region' || type == 'date'
                      ? <Picker
                          mode={type}
                          onChange={this.handleChange.bind(this, name)}
                        >
                          {value ? value : <View className='c-999'>{placeholder}</View>}
                        </Picker>
                      : type == 'selector' || type == 'multiSelector'
                        ? <Picker
                            mode={type}
                            range={_data}
                            // rangeKey={'text'}
                            value={value}
                            onChange={this.handleChange.bind(this, name)}
                          >
                            {value ? value : <View className='c-999'>{placeholder}</View>}
                          </Picker>
                        // : type == 'region' || type == 'date'
                        //   ? <Picker
                        //       mode={type}
                        //       onChange={this.handleChange.bind(this, name)}
                        //     >
                        //       {value ? value : <View className='c-999'>{placeholder}</View>}
                        //     </Picker>
                          : type == 'switch'
                            ? <Switch
                                checked={value}
                                color={'#ED414A'}
                              ></Switch>
                            : ''
                }
              </View>
            </View>
          )
        })}
      </View>
    )
  }
}
