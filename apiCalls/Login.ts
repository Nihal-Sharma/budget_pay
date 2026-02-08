import { baseURL } from "@/store/baseURL"
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"
export async function login(email :string , password : string){
    try{
        console.warn("request sent")
        const res =await axios.post(`${baseURL.nihal}/user/login` , {email , password})
        if(res.status ==200){
            // AsyncStorage.setItem("user" , res.data.user)
            // AsyncStorage.setItem("token" , res.data.token)
            return 200
        }
        else return 201
    }
    catch(err){
        console.warn(err)
        return 404
    }
}
export async function signUpUser(email :string , password : string){
    try{
        
        const res =await axios.post(`${baseURL.nihal}/user/signup` , {email , password})
        if(res.status ==200){
            // AsyncStorage.setItem("user" , res.data.user)
            // AsyncStorage.setItem("token" , res.data.token)
            return 200
        }
        else return 201
    }
    catch(err){
        console.warn(err)
        return 404
    }
}