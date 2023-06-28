const Buttons = ({children, onClick}) => {

  return (
    <>
        <button onClick={onClick} className="mx-auto px-5 py-3 bg-sky-800 text-white font-semi-bold rounded-md min-w-[7rem]">{children}</button>
    </>
  )
}

export default Buttons