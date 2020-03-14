import axios from 'axios'
export  const homeBanner = (params) =>{
    return axios.get("/banner",params); 
}
export  const homeRecommend = (params) =>{
    return axios.get("/personalized",params); 
}
export  const Login = (params) =>{
    return axios.post("/login/cellphone",params); 
}