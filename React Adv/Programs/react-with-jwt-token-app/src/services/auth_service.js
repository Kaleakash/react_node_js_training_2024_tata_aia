import axios from "axios"


let url = "http://localhost:3001"

export let register = async (username,password,role)=> {
        try {
            let response = await axios.post(`${url}/register`,{username,password,role})
            return response.data
        } catch (error) {
            console.log(error)
        }
}

export let login = async (username,password)=> {
    try {
        let response = await axios.post(`${url}/login`,{username,password})
        console.log(response.data.token)
        sessionStorage.setItem("token",response.data.token);
        return response.data.token
    } catch (error) {
        console.log(error)
    }
}

export let logout = ()=> {
    sessionStorage.removeItem("token");
}

export let getToken = ()=> {
    return sessionStorage.getItem("token")
}

export let getRole = ()=> {
    let token = getToken();
    if(!token){
        return null;
    }
    let data = JSON.parse(atob(token.split(".")[1]))
    console.log(data.role)
}

export let userInfo = async ()=> {
        try{
            let response = await axios.get(`${url}/user`,{headers:{
                "Authorization":"Bearer "+getToken()
            }})
            return response.data
        }catch(error){
            console.log(error)
        }
}
export let adminInfo = async ()=> {
    try{
        let response = await axios.get(`${url}/admin`,{headers:{
            "Authorization":"Bearer "+getToken()
        }})
        return response.data
    }catch(error){
        console.log(error)
    }
}