import React, { Component } from 'react'
import './ValidationSample.css';

export class VaidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validatied: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        this.input.focus(); //버튼 클릭시 해당 input으로 커서이동;
    }

    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                    ref={(ref) => this.input = ref}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}

export default VaidationSample
