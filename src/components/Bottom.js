import React from 'react'

const Bottom = ({next,back, currStep}) => {
  return (
    <div className="flex justify-between px-5 items-center w-full flex-row-reverse absolute bottom-5">
      <button disabled={currStep===4} type="button" onClick={next} className="px-6 py-2 rounded bg-sky-900 hover:bg-sky-800 text-white">
          Next Step
      </button>
      <button disabled={currStep===1} type="button" onClick={back} className="cursor-pointer px-6 py-2 rounded-md hover:border-sky-800 bg-white border-2 border-sky-500 text-sky-700">
          Back
      </button>
    </div>    
  )
}

export default Bottom