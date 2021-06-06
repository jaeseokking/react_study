import React, { useState } from 'react'

const IterationSample = () => {
    //상태안에서 배열을 변경할 때는 concat, filter를 사용하여
    //새로운 배열을 만드 후 이를 새로운 상태로 설정해 주어야 합니다.
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' }
    ])
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({ //concat : 기존 배열에 배열을 추가하여 새배열 생성 
            id: nextId, //nextId 값을 id로 설정하고
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames) //새롭게 변경된 배열을 저장
        setInputText(''); //inputText를 비운다.
    }
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id); //id에 해당하는 항목을 제외한 배열저장
        setNames(nextNames);
    }

    const nameList = names.map(name => <li
        key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}</li>)
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>
                {nameList}  {/* key값을 설정하면 변경시 자동으로 리렌더링 */}
            </ul>
        </>
    )
}

export default IterationSample
