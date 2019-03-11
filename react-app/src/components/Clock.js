/**
 * 状态组件，时间持续更新
 * 组件 & Props
 * state & 生命周期
 */
import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timer = setInterval( () => this.tick(), 1000 );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    actionLink(v, e){       //onClick 传值在前，事件对象e在后
        e.preventDefault();
        console.log(v, e);
    }

    render(){
        return (
            <div>
                <h3>现在是北京时间 {this.state.date.toLocaleTimeString()}</h3>
                <button href="#" onClick={this.actionLink.bind(this, '333')}>Click me</button>
            </div>
        )
    }
}

export default Clock;