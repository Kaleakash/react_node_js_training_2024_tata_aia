import { useFormik } from "formik";
import * as Yup from 'yup';

function BasicFormikFormWithYup() {

let validationSchema = Yup.object( {
   firstname:Yup.string().required("First Name is required"),
   lastname:Yup.string().required("Last name is required")
})
let {handleSubmit,handleChange,errors,values,handleReset}    = useFormik({            
            initialValues:{
                firstname:"",
                lastname:""
            },
            onSubmit:(values)=> {
                console.log("event fired")
                console.log(values)
                // logic to store the data  
            },
            onReset:(values)=> {
                console.log("reset called.")
                values.firstname=""
                values.lastname=""
            },
            validationSchema
        })
    return(
        <div>  
            <h2>Simple Basic Form with Yup Validation</h2>
            <form onSubmit={handleSubmit} onReset={handleReset}>
            <label>First Name</label>
            <input type="text" name="firstname" onChange={handleChange}  value={values.firstname}/>
                <span style={{"color":"red"}}>{errors.firstname?errors.firstname:null}</span>
            <br/>
            <label>Last Name</label>
            <input type="text" name="lastname" onChange={handleChange} value={values.lastname}/>
            <span style={{"color":"red"}}>{errors.lastname?errors.lastname:null}</span>
            <br/>
            <input type="submit" value="submit"/>
            <input type="reset" value="reset"/>
            </form>
        </div>
    )
}

export default BasicFormikFormWithYup;