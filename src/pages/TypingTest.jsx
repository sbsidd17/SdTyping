import React from "react";
import { useState, useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import '../App.css'
import { stopTimer, timeCheck, timeTake } from "../utility/timer";

function TypingTest() {
  const location = useLocation();
  const paragraph = location.state.paragraph;
  const time = location.state.time;
  const [minutes, setMinutes] = useState(time / 60);
  const [seconds, setSeconds] = useState("00");
  const [takenTime, setTakenTime] = useState(0)
  const [intervalId, setIntervalId] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [backSpace, setBackSpace] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [wordsArray, setWordsArray] = useState([]);
  const [isHighlightOn, setIsHighlightOn] = useState(true);
  const [scrTo, setScrTo] = useState(0);
  const hasFocused = useRef(false);
  const submitButtonRef = useRef(null);
  useEffect(() => {
    if (takenTime === Number(time) && submitButtonRef.current) {
      submitButtonRef.current.click();
      stopTimer(intervalId)
      // console.log('timer stopped');
    }
  }, [takenTime]);

  const handleChange = (event)=>{
      setTypedText(event.target.value)
  }

  function handleKeyDown(event) {
    if (event.keyCode === 8) {
      setBackSpace(pre => pre + 1)
    }
    if (event.keyCode === 32) {
      const currentWord = typedText.trim().split(" ").length;
      setCurrentIndex(currentWord);
      let highlightedWordPosition  = document.querySelector('.highlighted').offsetTop;
      let paraDivPosition =  document.querySelector('.para-div').offsetTop;
      setScrTo(highlightedWordPosition - paraDivPosition)
      document.querySelector('.para-div').scroll(0,scrTo)

  }
}

  const getWordsArray = () => {
    const wordsArray = paragraph.trim().split(" ")
    setWordsArray(wordsArray);
  };

  useEffect(()=>{
    getWordsArray()
  }, [])

  const toggleHighlight = () => {
    setIsHighlightOn(!isHighlightOn);
  }

  const getHighlightedWords = () => {
    return (
      <div className="flex flex-wrap w-[96%] mx-[2%] my-[10px]">
        {wordsArray.map((word, index) => {
          const isHighlighted = index === currentIndex && isHighlightOn;
          const className = isHighlighted ? "highlighted" : "";
          return (
            <span key={index} className={className}>
              {word}
              {index !== wordsArray.length - 1 && " "}
            </span>
          );
        })}
      </div>
    );
    
  };
   
  const handleFocus = () => {
    if (!hasFocused.current) {
      hasFocused.current = true;
      timeCheck(time, setMinutes, setSeconds);
      timeTake(setTakenTime, setIntervalId)
    }
  };

  return (
    <div>
      {/* Main div */}
      <div className="flex w-[100vw] h-[100vh] bg-slate-200">
        {/* Typing display left div */}
        <div className="flex flex-col w-[75%] my-5 mx-2 bg-slate-100 rounded-md ">
          {/* Paragraph Details */}
          <div className="flex bg-slate-500 h-10 w-[100%] text-2xl text-white rounded-md align-center justify-between overflow-hidden">
            <div className="w-[60%]">
              <h3 className="mx-5">Paragraph Name : {paragraph}</h3>
            </div>
            <div>
              <h3 className="mx-5">
                Time Left : {minutes}:{seconds}
              </h3>
            </div>
          </div>
          {/* Typing Text Div */}
          <div className="para-div flex w-[96%] h-[230px] border border-black rounded-md mx-[2%] mt-[10px] bg-white overflow-y-scroll whitespace-pre-wrap">
          {getHighlightedWords()}
          </div>
          {/* Typing TextBox */}
          <textarea
            className="flex w-[96%] h-[200px] border border-black rounded-md mx-[2%] my-[10px]"
            value={typedText} 
            onFocus={handleFocus}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          ></textarea>
          {/* Submit Button */}
          <Link to={"/result"} state={{ takenTime, typedText, paragraph, backSpace }}>
          <button type="submit" ref={submitButtonRef} onClick={stopTimer} className="rounded-full bg-slate-500 ml-[30px] py-2 text-white w-[200px] hover:bg-slate-700 mb-[20px]">
              Submit Test
            </button>
          </Link>
        </div>
        {/* Right Div */}
        <div className="flex flex-col w-[25%] my-5 mx-2 bg-slate-100 rounded-md">
        <button onClick={toggleHighlight}>
        {isHighlightOn ? "Highlight off" : "Highlight on"}
      </button>
        </div>
      </div>
    </div>
  );
}

export default TypingTest;
