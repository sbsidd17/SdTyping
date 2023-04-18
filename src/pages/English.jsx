import React from 'react'
import SelectParagraph from '../components/SelectParagraph'
import { englishTypingData } from '../utility/englishTypingData'



function English() {
  return (
    <div>
        <SelectParagraph typingData={englishTypingData}/>
    </div>
  )
}

export default English