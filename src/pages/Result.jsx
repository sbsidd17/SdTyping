import React from 'react'
import { useLocation } from 'react-router-dom'
import { result } from '../utility/result';

function Result() {
  const location = useLocation();
  const { takenTime, typedText, paragraph, backSpace } = location.state;
  const finalResult = result(takenTime, typedText, paragraph)
  // console.log(finalResult)
  return (
    <div>

      <h1>Here Are Your Details</h1>
      <h2>Gross Speed : {finalResult.grossSpeed1} WPM</h2>
      <h2>Net Speed : {finalResult.netSpeed1} WPM</h2>
      <h2>Accuracy : {finalResult.accuracy1}%</h2>
      <h2>Total Word : {finalResult.totalWord}</h2>
      <h2>Typed Word : {finalResult.typedWord}</h2>
      <h2>Right Word : {finalResult.rightWord}</h2>
      <h2>Wrong Word : {finalResult.wrongWord}</h2>
      <h2>Taken Time : {finalResult.min}:{finalResult.sec}</h2>
      <h2>BackSpace Press : {backSpace}</h2>
    </div>
  )
}

export default Result