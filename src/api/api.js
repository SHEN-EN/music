import axios from 'axios'
export  const homeBanner = (params) =>{
    return axios.get(`/banner?type=${params}`); 
}
export  const homeRecommend = (params) =>{
    return axios.get(`/personalized`,params); 
}
export  const Login = (params) =>{
    return axios.post("/login/cellphone",params); 
}
export  const playlist = (params) =>{
    return axios.get(`/playlist/detail?id=${params}`); 
}