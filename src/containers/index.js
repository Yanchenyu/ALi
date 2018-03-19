import React, { Component } from 'react'
import classnames from 'classnames'
import { asyncAjax } from '../server/server'

const debounce = require('lodash/debounce');    // 按需加载

const asyncInstance = (value, that) => {
    return asyncAjax(value, (data) => {
        that.setState({
            asyncData : data,     // 将返回的数组赋值,并且显示提示部分
            hide: false
        })
    }, () => {
        that.setState({
            asyncData: [],
            hide: true
        });
    })
}

const getDataAsync = debounce(asyncInstance, 300);  // 100ms延迟搜索

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',   // 输入框的值
            asyncData: [],  // 请求返回数组
            hide: true  // 提示框是否显示
        };
        this.handleChange = this.handleChange.bind(this);   // 监听输入框onchange事件绑定
    }
    handleChange(e) {
        let value = e.target.value;
        if (!value) {
            this.setState({
                asyncData: [],
                hide: true
            });
            // 如果输入框为空，隐藏提示部分以及清空数组
        }
        getDataAsync(value, this);
        this.setState({
            value
        })
    }
    render(){
        return (
            <div id='lg'>
                <img src='//www.baidu.com/img/bd_logo1.png' width='270' height='129' />
                <div>
                    <input className='textInput' type='text' onChange={this.handleChange} value={this.state.value} placeholder='请输入搜索关键字' />
                    <button className='btnClick'>百度一下</button>
                </div>
                <ul className={classnames('tips', {'hide': this.state.hide})}>
                {
                    this.state.asyncData.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>   
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

export default App