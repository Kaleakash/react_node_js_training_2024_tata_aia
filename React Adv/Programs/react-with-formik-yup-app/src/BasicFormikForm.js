import { useFormik } from "formik";

function BasicFormikForm() {

let {handleSubmit,handleChange,errors}    = useFormik({            
            initialValues:{
                firstname:"",
                lastname:""
            },
            onSubmit:(values)=> {
                console.log("event fired")
                console.log(values)
            },
            validate:(values)=> {
                if(values.firstname.length==0){
                    errors.firstname="First Name is required"  
                }else if(values.lastname.length==0){
                    errors.firstname=""
                    errors.lastname="Last Name is required"
                }else {
                    errors.firstname=""
                    errors.lastname=""
                    return true
                }    
            }
        })
    return(
        <div>  
            <h2>Simple Basic Form</h2>
            <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type="text" name="firstname" onChange={handleChange}/>
                <span style={{"color":"red"}}>{errors.firstname}</span>
            <br/>
            <label>Last Name</label>
            <input type="text" name="lastname" onChange={handleChange}/>
            <span style={{"color":"red"}}>{errors.lastname}</span>
            <br/>
            <input type="submit" value="submit"/>
            <input type="reset" value="reset"/>
            </form>
        </div>
    )
}

export default BasicFormikForm;