import Arcade from "../../images/icon-arcade.svg";
import Advanced from "../../images/icon-advanced.svg";
import Pro from "../../images/icon-pro.svg";
import "./Billing.css";
import {Switch} from "antd";

const Billings = ({addPurchase, purchase, setIsMonth, isMonth}) => {   
  const levels = [
    {level:"Arcade", mp:9, yp:90, image:Arcade},
    {level:"Advanced", mp:12, yp:120, image:Advanced},
    {level:"Pro", mp:15, yp:150, image:Pro}
]

  return (
    <>
        <div className="">
            <h2 className="cursor-pointer text-slate-800 text-2xl font-bold md:text-3xl">Select your plan</h2>
            <p className="text-gray-400 text-sm md:text-base">You have the option of monthly or yearly billing</p>
        </div>

        <div className="grid grid-cols-1 grid-rows-3 h-fit gap-2 mt-4 mb-3 md:flex md:gap-5">
          {levels.map((item, i) => {
            return(
              <div onClick={()=>addPurchase(item.level)}
              key={i}
              className={`${purchase.service === item.level && "border-indigo-700 border-2"} hover:border-indigo-700 flex justify-start 
              px-2 py-2 border border-gray-500 border-opacity-30 rounded-lg gap-3 md:flex-col md:gap-4 md:px-4
              md:z-50`}>
                <div className="w-10 ">
                  <img className="w-full object-cover" src={item.image} alt={item.level} />
                </div>
                
                <div className="flex flex-col justify-start items-start">
                  <h2 className="font-bold text-sky-900 text-lg pointer-events-none md:text-xl">{item.level}</h2>
                  <small className="text-gray-400 opacity-80 font-semibold text-sm pointer-events-none">{!isMonth ? `$ ${item.mp} /mo` : `$ ${item.yp} /yr`}</small>
                  <p className={`text-violet-700 text-sm ${!isMonth && "opacity-0"} pointer-events-none`}> 2 months free</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* <button className="border border-sky-300 rounded-md px-5 py-4 relative translate-x-20 bg-slate-400 text-white font-semibold" onClick={onToggle}>Toggle y and m</button> */}
        <div className="bg-red-100 rounded-md flex justify-center py-3 mt-10 md:w-[90%]">
          <button type="button" onClick={()=>setIsMonth(() => false)} className={` ${!isMonth ? "text-gray-500 opacity-70" : "text-slate-800 opacity-100"} font-semibold  border-none mx-3 `}>Month</button>
          <Switch checked={isMonth} onChange={() => {
            setIsMonth(prev => !prev)}}/>
          <button type="button" onClick={()=>setIsMonth(() => true)} className={`${isMonth ? "text-gray-500 opacity-70" : "text-slate-800 opacity-100"} font-semibold text-slate-700 border-none mx-3 `}>Year</button>
        </div> 
        
    </>
  )
}

export default Billings