import { baseURL } from "@/store/baseURL"
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"

export async function login(email :string , password : string){
    try{
        
        const res =await axios.post(`${baseURL.nihal}/user/login` , {email , password})
        if(res.status ==200){  
            // AsyncStorage.setItem("token" , res.data.token)
            return res.data
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
           
            // AsyncStorage.setItem("token" , res.data.token)
            return res.data
        }
        else return 201
    }
    catch(err){
        console.warn(err)
        return 404
    }
}

export async function updateUser(id: string, data: any) {
  try {
    const res = await axios.post(
      `${baseURL.nihal}/user/update`,
      {
        userId: id,
        data,
      }
    );

    if (res.status === 200) {
      // Update AsyncStorage user
      
      return res.data.user
    } else {
      return 201;
    }
  } catch (err) {
    console.warn("Error",err);
    return 404;
  }
}
