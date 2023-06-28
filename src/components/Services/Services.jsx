import {TiTick} from "react-icons/ti";

const Services = ({purchase, handleBilling, isMonth}) => {
    
    const services = [
        {id:1, title:"Online service", info:"Access to multiplayer games", monthly_price:"1", yearly_price:"10",},
        {id:2, title:"Larger storage", info:"Extra 1TB of cloud save", monthly_price:"1", yearly_price:"10",},
        {id:3, title:"Customizable profile", info:"Custom theme on your profile", monthly_price:"2", yearly_price:"20",}
    ]
    return (
    <>
        <div>
            <h2 className="text-slate-800 text-2xl md:text-3xl font-bold">Pick add-ons</h2>
            <p className="text-gray-400 text-sm md:text-base">Add ons help enhance your gaming experience</p>
        </div> 
        <div className="mt-5">
            {services.map((item, index) =>{
                return(
                    <div key={index}
                     onClick={() => {
                        handleBilling(item.title, item.monthly_price, item.yearly_price, item.id)}}
                        className="grid cursor grid-cols-5 px-2 py-2 bg-slate-300 rounded-md border items-center gap-0">
                        <div  className="w-5 h-5 bg-white border flex items-center justify-center">
                            {purchase.billing.find(service => service.id === item.id) ? <TiTick/> : ""}
                        </div>
                        <div className="grid grid-flow-row col-span-3">
                            <h2 className="pointer-events-none text-slate-500 font-semibold text-sm md:text-base">{item.title}</h2> 
                            <p className="pointer-events-none">{item.info}</p>
                        </div>
                        <h4 className="pointer-events-none text-indigo-700 text-base font-semibold">
                            {!isMonth ? `+$${item.monthly_price}/mo` : `+$${item.yearly_price}/yr`}
                        </h4>
                </div>
                )
            })}
        </div>
        
          
    </>
  )
}

export default Services