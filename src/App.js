import React , { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, changeTitle] = useState(['첫글', '두번쨰글', '세번째글']);
  let [content, changeContent] = useState(['1 내용', '2 내용', '3 내용']);
  let [good, changeGood] = useState(0);

  let posts = "React 처음입니다. ㅠㅠ";

  function changeTitleM () {
    let newArray = [...title];
    newArray[0] = '여자 코드 변경';
    changeTitle( newArray );
  };

  return (
    <div className="App">
      <div className="nav">
        <div>React TEST</div>
      </div>

      <div className="list">
        <h1> {title[0]} <span onClick={ () => { changeGood(good += 1) } }>👍</span> { good } </h1>
        <p> { content[0] } </p>
        <button onClick={ changeTitleM }>제목변경</button>
        <hr/>
      </div>

      <div className="list">
        <h1> {title[1]} </h1>
        <p> { content[1] } </p>
        <hr/>
      </div>

      <div className="list">
        <h1> {title[2]} </h1>
        <p> { content[2] } </p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
