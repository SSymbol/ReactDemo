import React from 'react';

export default class FormDemo extends React.Component {

    constructor() {
        super();
        this.state = {
            value: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.value);
    }

    onChangeHandler = (e) => {
        this.setState({
            value:e.target.value //e.target es6操作dom读取方案 e表示event？
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.onChangeHandler} />
                    <input type="submit" value="提交"></input>
                </form>
            </div>
        )
    }
}