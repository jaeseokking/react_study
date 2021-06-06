import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => { //비구조화 할당 방법
    return <div>
        안녕하세요 제 이름은 {name}입니다. <br />
        children 값은 {children} 입니다.<br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
}


//defaultProps 와 propTypes는 해당 컴포넌트에 어떤 props가 필요한지 쉽게 알 수 잇음
MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.propTypes = {
    name: PropTypes.string, //name 값은 무조건 string이어야함
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;