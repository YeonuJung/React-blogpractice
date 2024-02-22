/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState('닫힘');
  let [modalTitle, setModalTitle] = useState(0)
  return (
    <>
       <div className="black-nav">
        <h4>Reactblog</h4>
      </div>
      {/*
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <button
          onClick={() => {
            let sortTitle = [...글제목].sort();
            제목변경(sortTitle);
          }}
        >
          가나다순 정렬
        </button>

        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = "여자 코트 추천";
            제목변경(copy);
          }}
        >
          제목변경
        </button>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 18일 발행</p>
      </div>

      <div className="list">
        <h4 onClick = {() => {
          modal == "닫힘"? setModal("열림"): setModal("닫힘")
        }}>{글제목[2]}</h4>
        <p>2월 19일 발행</p>
      </div>

      {modal == "열림"? <Modal></Modal> : null } */}
      {/* 이 부분은 살짝 이해가 되는게 title이 결국 글제목[index] 이니깐 각 인덱스를 가진 글제목을 클릭할 경우 setModalTitle 변경함수로 
          각각의 인덱스를 바꿀 수 있다는 점을 이해할 수 있었음. 하지만 밑에 따봉 표시의 경우 따봉을 누른다고 해서 왜 따로 +1 되는 메커니즘인지 이해할 수 없었음.*/}
      {글제목.map(function(title, index){
        return( 
        <div className="list">
        <h4 onClick = {() => {
          modal == "닫힘"? setModal("열림") : setModal("닫힘")
          setModalTitle(index)
        }}>{title}<span                         
        onClick={() => {
          let copyUp = [...따봉];
          copyUp[index] = copyUp[index] + 1
          따봉변경(copyUp)
        }}
      >
        👍
      </span>
      {따봉[index]}</h4>
        <p>2월 18일 발행</p>
      </div>)
})}
      {modal == "열림"? <Modal 글제목 = {글제목} modalTitle = {modalTitle}></Modal> : null }

      </>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <p>ddd</p>
    </div>
    
  );
}
{/* <button onClick = {() => {
        let copyTitle = [...props.글제목]
        copyTitle[0] = "여자 코트 추천"
        props.제목변경(copyTitle)
      }}>글수정</button> */}
    
export default App;
