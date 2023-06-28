import React,{useState} from 'react';
import "./Stepper.css";
import {TiTick} from "react-icons/ti";
import Service3 from "../components/Services3";

const Stepper = () => {
    const steps = ["Personal info", "Add-ons", "Services", "Payments"]
    const [step, setStep] = useState(1)
    const [complete, setComplete] = useState(false)
    
  return (
    <>
        <div className="flex align-center justify-between ">
        {steps && steps.map((item, i)=>{
            return(
                <div className={`step-item-1 ${step===i+1 && "active" } ${(i+1 < step || complete) && "complete"}`}>
                    <h3 className="step-1">
                        {(i+1 < step || complete) ? <TiTick size={24}/>:i+1}
                    </h3>
                    <p className="text-gray-500">{item}</p>
                </div>
                )
            })}
        </div>

        <div className="">
            <Service3/>
        </div>

        <div className="flex justify-between w-80 items-center">
            <button onClick={()=>{
                step >= 2 
                ?setStep((curr)=>curr-1)
                :setComplete(false)
                
            }} className="btn">Back {step}</button>
            <button onClick={()=>{
            step===steps.length 
            ?setComplete(true)
            :setStep((prev)=>prev + 1)
            }}className="btn">{step===steps.length ?"Confirm":"Next"}</button>
        </div>
        
         </>
  )
}

export default Stepper