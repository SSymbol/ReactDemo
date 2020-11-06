import React from "react";

export default class KeyDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            userinfo: [
                {
                    name: "Symbol",
                    age: 20,
                    sex: "男",
                    jobs: [111, 222, 333]
                },
                {
                    name: "xia",
                    age: 22,
                    sex: "男",
                    jobs: [111, 222, 333]
                },
                {
                    name: "han",
                    age: 26,
                    sex: "男",
                    jobs: [111, 222, 333]
                },
            ]
        }
    }
    cliclHandle = () => {
        this.setState({
            userinfo: this.state.userinfo.concat([{ //concat 合并为一个数组， push会报错
                name: "li",
                age: 30,
                sex: "女",
                jobs: ['333', '444', '555']
            }])
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.userinfo.map((element, index) => {
                            return (
                                <li key={index}>
                                    <span>{element.name}</span>
                                    <span>{element.age}</span>
                                    <span>{element.sex}</span>
                                    <div>
                                        {
                                            element.jobs.map((childElement, childIndex) => {
                                                return <span key={childIndex}>{childElement}</span>
                                            })
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.cliclHandle}>添加数据</button>
            </div>
        )
    }
}