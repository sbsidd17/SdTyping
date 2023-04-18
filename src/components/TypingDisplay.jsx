import React from 'react'

function TypingDisplay() {
  return (
    <div>
        {/* Main div */}
        <div className="flex w-[100vw] h-[100vh] bg-slate-200">
            {/* Typing display left div */}
            <div className="flex flex-col w-[75%] my-5 mx-2 bg-slate-100 rounded-md " >
                {/* Paragraph Details */}
                <div className="flex bg-slate-500 h-10 w-[100%] text-2xl text-white rounded-md align-center justify-between">
                    <h3 className='mx-5'>Paragraph Details Here</h3>
                    <h3 className='mx-5'>Time Left : 00:00</h3>
                </div>
                {/* Typing Text Div */}
                <div className="flex w-[96%] h-[230px] border border-black rounded-md mx-[2%] mt-[10px] bg-white"></div>
                {/* Typing TextBox */}
                <textarea className='flex w-[96%] h-[200px] border border-black rounded-md mx-[2%] my-[10px]'></textarea>
                {/* Submit Button */}
                <button class="rounded-full bg-slate-500 ml-[30px] py-2 text-white w-[200px] hover:bg-slate-700 mb-[20px]">Submit Test</button>
            </div>
            {/* Time Display Div */}
            <div className="flex flex-col w-[25%] my-5 mx-2 bg-slate-100 rounded-md">
                
            </div>
        </div>
    </div>
  )
}

export default TypingDisplay