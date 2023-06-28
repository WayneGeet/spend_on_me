import tick from "../images/icon-thank-you.svg";
const Thankyou = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
        <div className="w-20">
            <img src={tick} alt="thank you" className="object-cover" />
        </div>
        <div className="mt-10 mb-5">
            <h2 className="font-bold text-2xl text-sky-950">Thank you!</h2>
        </div>
        <p className="text-gray-400 opacity-90">Thanks for confirming your subscription!
            We hope you have fun using our platform. If 
            you ever need support, please feel free to email us at 
            support@loremgaming.com
            <span className="block py-4 opacity-100"><a className="text-red-300" href="https://www.linkedin.com/in/gitau-wynne/">Let's connect on LinkedIn</a></span>
             and share with me your experience with this simple application.
        </p>
    </div>
  )
}

export default Thankyou