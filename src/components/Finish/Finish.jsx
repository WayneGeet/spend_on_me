import {useEffect, useContext, useState} from "react";
import {BtnContext} from "../Context";
const Finish = ({services, deal, isMonth}) => {
    const [currStep, setCurrStep] = useContext(BtnContext);
    useEffect(()=>{
        if(!deal){
            setCurrStep(2);
            alert("You must select a plan")
            return;
        }
        else{
            setTotal(services.reduce((sum, service) => sum + (!isMonth ? Number(service.mp) : Number(service.yp)), 0)           )
        }
    }, [services, isMonth, currStep, deal, setCurrStep]);
    useEffect(()=>{
        if(deal === "Arcade"){
            if(!isMonth){
                setDealPrice(9)
            }
            else{setDealPrice(90)}
        }
        else if(deal === "Advanced"){
            if(!isMonth){
                setDealPrice(12)
            }
            else{setDealPrice(120)}
        }
        else{
            if(!isMonth){
                setDealPrice(15)
            }
            else{
                setDealPrice(150)
            }
        }
    }, [deal, isMonth])

    const [total, setTotal] = useState(0);
    const [dealPrice, setDealPrice] = useState(0)
    return (
    <>
        <div className="mb-5">
            <h2 className="text-slate-800 text-2xl font-bold md:text-3xl ">Finishing up</h2>
            <p className="text-gray-400 text-sm md:text-base">Double check everything looks okay before confirming</p>
        </div>

        <div className="bg-red-50">
            <div className="border-b border-opacity-20 border-gray-400 py-4 flex justify-between px-2">
                <h2 className="text-lg font-bold text-sky-800">{deal} (monthly)</h2>
                <h3 className="text-lg font-bold text-sky-800">{!isMonth ? `$${dealPrice}/mo` : `$${dealPrice}/yr`}</h3>
            </div>
            {services && services.map((service, i)=>{
                return(
                    <div key={i} className="">
                        <div className="flex justify-between items-center px-2 py-2 gap-5">
                            <h4 className="text-gray-400 opacity-80">{service.addOn}</h4>
                            <p>{!isMonth ? `$${service.mp}/mo` : `$${service.yp}/yr`}</p>
                        </div>                       
                    </div>
                )
            })}
        </div>

        <div className="flex justify-between px-2 py-4 mt-5">
            <h3 className="text-gray-400 opacity-80">Total {!isMonth ? "(per month)": "(per year)"}</h3>
            <p className="font-semibold text-lg text-blue-800">{!isMonth ? `$${total + dealPrice}/mo` : `$${total + dealPrice}/yr`}</p>
        </div>
    </>
    
  )
}

export default Finish