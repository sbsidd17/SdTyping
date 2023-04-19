import React from 'react'
import SelectParagraph from '../components/SelectParagraph'
import { hindiTypingData } from '../utility/hindiTypingData'

function Hindi() {
  return (
    <div>
      <SelectParagraph typingData={hindiTypingData} />
    </div>
  )
}

export default Hindi