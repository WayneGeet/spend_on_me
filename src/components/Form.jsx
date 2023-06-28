import {useFormik} from "formik";
import * as Yup from "yup";
const Form = () => {
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            phone:"",
        },
        validationSchema:Yup.object({
            name:Yup.string().max(30, "name must be 30 characters or less").required("Name is required"),
            email:Yup.string().email("Invalid email address").required("email is required"),
            phone:Yup.number("invalid input")
        }),
        onSubmit: (values) => {
            alert(values)
            console.log(formik.errors)
        }
    })
    
  return (
    <>
        <div>
            <h2  className="text-slate-800 text-3xl font-bold">Personal info</h2>
            <p className="text-gray-400 text-base">Please provide your name, email address, and phone number</p>
        </div>
        <div>
            <form onSubmit={formik.handleSubmit} 
            className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col">
                    <label htmlFor="inpt" className={`${(formik.touched.name && formik.errors.name ) ? "font-semibold text-red-400":""} font-normal text-sm cursor-pointer`}>
                        {(formik.touched.name && formik.errors.name) ? formik.errors.name : "Name"}
                        </label>
                    <input 
                    id="inpt"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange} 
                    value={formik.values.name}
                    type="text" 
                    placeholder="e.g. Stephen King" 
                    className="border rounded-md px-4 py-2 focus:outline-blue-500 focus:outline-1" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="inpt1" className={`${(formik.touched.email && formik.errors.email) ? "font-semibold text-red-400":""} font-normal text-sm cursor-pointer`}>
                        {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}
                    </label>
                    <input 
                    name="email"
                    type="email" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.email} 
                    placeholder="e.g. stephenking@lorem.com" 
                    id="inpt1" 
                    className="border rounded-md px-4 py-2 focus:outline-blue-500 focus:outline-1" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="inpt2" className="font-normal text-sm cursor-pointer">{formik.errors.phone ? formik.errors.phone : "Mobile Number"}</label>
                    <input
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange} 
                    type="text" 
                    placeholder="e.g. +1 234 567 890" 
                    id="inpt2" 
                    className="border rounded-md px-4 py-2 focus:outline-blue-500 focus:outline-1" />
                </div>
            </form>
        </div>
    </>
  )
}

export default Form;
