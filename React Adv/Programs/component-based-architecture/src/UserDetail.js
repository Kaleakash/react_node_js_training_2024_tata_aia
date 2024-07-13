import { useState } from "react";

function UserDetail({user,updateUser}) {
let [isEditing,setEditing]=useState(false);
let [formData,setFormData]=useState({name:"",age:"",city:""})
let editUser=()=> {
    setFormData(user)
    setEditing(true);
}
let handleSubmit=(event)=> {
    event.preventDefault();
    console.log(formData);
        updateUser(formData)
    setEditing(false);
}
    return(
        <div>
            {
              !isEditing?  
                (
                <div>
                <h4>User Info</h4>
                <p>Id is {user.id} Name is {user.name} Age is {user.age} City is : {user.city}
                <input type="button" value="Edit" onClick={()=>editUser(user)}/></p>
                </div>        
                ):
                (
                    <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} 
                        onChange={(event)=>setFormData(user=>{return {...user,name:event.target.value}})}/> <br/>
                        <label>Age</label>
                        <input type="number" name="age" value={formData.age}
                        onChange={(event)=>setFormData(user=>{return {...user,age:event.target.value}})}
                        /> <br/>
                        <label>City</label>
                        <input type="text" name="city" value={formData.city}
                        onChange={(event)=>setFormData(user=>{return {...user,city:event.target.value}})}
                        /> <br/>
                        <input type="submit" value="Save Changes"/>
                        <input type="reset" value="reset"/>
                    </form>
                )
               
            }   
        </div>
    )
}

export default UserDetail;