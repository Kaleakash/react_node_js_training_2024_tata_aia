import { useFormik } from 'formik';
import * as Yup from 'yup';

function Employee() {

let validationSchema = Yup.object({
    id:Yup.number().integer().min(1).max(100).required(),
    name:Yup.string().required(),
    salary:Yup.number().integer().min(10000).max(50000).required(),
    email_id:Yup.string().email().required(),
    password:Yup.string().required().min(8).matches(/[a-z,A-Z]/,"Password must be match the rules")
})
const {handleSubmit,handleChange,handleReset,values,errors}=useFormik({
    initialValues:{
        id:"",
        name:"",
        salary:"",
        email_id:"",
        password:""
    },
    validationSchema,
    onSubmit:(values)=> {
        console.log(values)
    },
    onReset:(values)=> {
        console.log("reset called..")
        values.id=""
        values.name=""
        values.salary=""
        values.email_id=""
        values.password=""
    }

})
    return(
        <div>
            <h2>Employee Component</h2>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <label>Id</label>
                <input type='number' name='id' value={values.id} onChange={handleChange}/>
                <span style={{"color":"red"}}>{errors.id?errors.id:null}</span>
                <br/>
                <label>Name</label>
                <input type='text' name='name' value={values.name} onChange={handleChange}/>
                <span style={{"color":"red"}}>{errors.name?errors.name:null}</span>
                <br/>
                <label>Salary</label>
                <input type='number' name='salary' value={values.salary} onChange={handleChange}/>
                <span style={{"color":"red"}}>{errors.salary?errors.salary:null}</span>
                <br/>
                <label>EmailId</label>
                <input type='email' name='email_id' value={values.email_id} onChange={handleChange}/>
                <span style={{"color":"red"}}>{errors.email_id?errors.email_id:null}</span>
                <br/>
                <label>Password</label>
                <input type='password' name='password' value={values.password} onChange={handleChange}/>
                <span style={{"color":"red"}}>{errors.password?errors.password:null}</span>
                <br/>
                <input type='submit' value="Store Employee"/>
                <input type='reset' value="reset" ></input>
            </form>
        </div>
    )
}


export default Employee;
