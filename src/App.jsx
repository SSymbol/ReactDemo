import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentLife from './ComponentLife';
import SetStateDemo from './setStateDemo';
import IfDemo from './ifDemo';
import KeyDemo from './keyDemo';
import FormDemo from './FormDemo';
import RefsAndDOM from './RefsAndDOM';
import RefsForm from './RefsForm';
import Parent from './components/parent';
import Compose from './compose';
import PropsTypeDemo from './PropsTypeDemo';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      title: '文本1'
    }
  }

  clickChange=(data)=>{ //data 从子传过来的参数
    this.setState({
      title:data
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.jsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <ComponentLife title={this.state.title} clickChanges={this.clickChange} />
          {/* <button onClick={ this.clickChange }>修改title</button> 父传子这个事件在父亲*/}
          {/* <SetStateDemo></SetStateDemo> */}
          {/* <IfDemo></IfDemo> */}
          {/* <KeyDemo></KeyDemo> */}
          {/* <FormDemo></FormDemo> */}
          {/* <RefsAndDOM></RefsAndDOM> */}
          {/* <RefsForm></RefsForm> */}
          {/* <Parent></Parent> */}
          {/* <Compose>
            <div>Children</div>
          </Compose> */}
          <PropsTypeDemo title="标题"> </PropsTypeDemo>
        </header>
      </div>
    );
  }

}

export default App;
