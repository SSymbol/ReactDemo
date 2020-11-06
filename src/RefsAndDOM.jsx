import React from 'react';

export default class RefsAndDOM extends React.Component {
    constructor() {
        super();
        this.HelloDiv = React.createRef(); //创建ref
    }

    componentDidMount() {
        console.log(this.HelloDiv.current);//打印出<div>Hello</div>
        this.HelloDiv.current.style.color = "red"; //操作DOM
    }
    render() {
        return (
            <div>
                Refs and DOM
                <div ref={this.HelloDiv}>
                    Hello
                </div>
            </div>
        )
    }
}