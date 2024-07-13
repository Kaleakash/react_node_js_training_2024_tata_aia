let DeleteButton = ({user,deleteUser})=><input type="button" value="Delete" onClick={()=>deleteUser(user.id)}/>

function User({user,deleteUser}) {

    return(
        <>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.birthDate}</td>
            <td><DeleteButton user={user} deleteUser={deleteUser}/></td>
        </>
    )
}

export default User;