import React, { Component } from 'react'

class Counter extends Component {
    // constructor(props) { //초기 메서드
    //     super(props);
    //     //state의 초기값 설정하기
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0
    //     };
    // }
    state = { // constructor 메서드 선언없이 state 초기값 설정
        number: 0,
        fixedNumber: 0
    };
    render() {
        const { number, fixedNumber } = this.state; //state를 조회할 때는 this.state로 조회합니다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                    //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                    onClick={() => {
                        this.setState(
                            {//값이 변경된것이 state의 변수에 저장되고
                                number: number + 1
                            },
                            () => {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                        );
                        //위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
                        //아래 코드는 함수에서 바로 객체를 변환한다는 의미입니다.
                        this.setState(prevState => ({ //저장된 state변수에 또 계산
                            number: prevState.number + 1
                        }));
                    }}
                >
                    +1
                </button>
            </div >
        )
    }
}
export default Counter;