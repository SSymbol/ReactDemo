import React from 'react';

export default class SetStateDemo extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    // increment = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     }, () => {    //箭头函数实时获取
    //         console.log(this.state.count);
    //     })
    // }
    //异步写法

    //改为同步写法

    async increment(){
        await this.setStateAsync({count:this.state.count+1});
        console.log(this.state.count);
    }

    //promise async  await

    setStateAsync(state){
        return new Promise((resolve) =>{
            this.setState(state,resolve);
        })
    }

    render() {
        return (
            <div>
                setState同步还是异步问题
                <p>{this.state.count}</p>
                <button onClick={this.increment.bind(this)}>修改</button> 
                {/* 同步写法需要bind（this) */}
            </div>
        )
    }
}