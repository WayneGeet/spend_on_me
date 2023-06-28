import React, {useState, useContext} from 'react';
import Card from '../Card';
import Buttons from '../Btn/Buttons';
import Top from '../Top';
import { BtnContext } from '../Context';

import "./Main.css"

const Main = () => {
    const [currStep, setCurrStep] = useContext(BtnContext)
    const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"]
    const [complete, setComplete] = useState(false);
       
  return (
    <div className="md:flex md:justify-start md:max-w-4xl md:m-auto md:relative
    md:shadow-lg md:shadow-gray-400 md:rounded-lg md:bg-white md:w-full">
        <Top/>
        <div className="">
            <div className="flex align-center absolute top-8 mb-5 w-full justify-center md:flex-col
            md:left-10 md:gap-6 md:top-16">
                {steps && steps.map((step, i)=>{
                    return(
                        <div key={i} className="flex flex-col align-center w-16 md:flex-row md:w-fit md:gap-5">
                            <div className={`${currStep===i+1 ? "bg-sky-500" : ""} w-8 h-8 flex justify-center align-center
                             rounded-full font-semibold pointer-events-none text-white border border-white `}>{i+1}</div>
                             <div className="md:flex flex-col hidden ">
                                <h4 className="uppercase opacity-80 text-gray-300 text-sm">Step {i+1}</h4>
                                <h3 className="text-white font-semibold uppercase text-sm">{step}</h3>

                             </div>
                        </div>
                )
                })}
            </div>
        </div>

        <div className=" py-8 w-full relative flex flex-col items-center md:-top-12">
            <div className="">
                <Card currStep={currStep} thanks={complete}/>
            </div>
           {!complete &&
            <div className="flex items-center w-1/2 mx-auto fixed bottom-5 ml-auto md:absolute gap-10 left-4">
                <Buttons onClick={ () => {
                        currStep !== 1 && setCurrStep(i => i-1)
                    }}>Go Back
                </Buttons>
                
                <Buttons
                onClick={() => {
                    currStep === steps.length ?
                    setComplete(true) :
                    setCurrStep(i => i +1)
                }}
                > {currStep === steps.length ? "Confirm" : "Next"}
                </Buttons>
            </div>}
        </div>
    </div>
    
  )
}

export default Main