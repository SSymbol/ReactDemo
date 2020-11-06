import React from 'react';

export default class RefsForm extends React.Component {

    constructor() {
        super();
        this.username = React.createRef();
        this.password = React.createRef();
    }

    clickHandler = (e) => {
        console.log(this.username.current.value);
        console.log(this.password.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.username}></input>
                <input type="text" ref={this.password}></input>
                <button onClick={this.clickHandler} >提交</button>
            </div>
        )
    }
}