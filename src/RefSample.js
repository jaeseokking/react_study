import React, { Component } from 'react'

export class RefSample extends Component {
    input = React.createRef();
    //ref는 DOM에 직접 접근해야 할 때 사용합니다.
    handleFocus = () => {
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.input} />
            </div>
        )
    }
}

export default RefSample
