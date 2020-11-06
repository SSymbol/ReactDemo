import React from "react"

export default class ComponentLife extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    changeHandler = () => {
        this.setState({
            count: this.state.count += 1
        })
    }

    clickChange = () => {
        this.props.clickChanges('子数据'); //从父级读过来的props 父级的clickChanges事件  
        //子传父 优点在于 可以传参 
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                生命周期函数：{ count} - { this.props.title}
                <button onClick={this.changeHandler}>修改</button>
                <button onClick={this.clickChange}>修改title</button> {/*子传父这个事件在子*/}
            </div>
        )
    }
}