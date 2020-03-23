import axios from 'axios'
export  const homeBanner = (params) =>{
    return axios.get(`/banner?type=${params}`); 
}
export  const homeRecommend = (params) =>{
    return axios.post(`/personalized`,params); 
}
export  const Login = (params) =>{
    return axios.post("/login/cellphone",params); 
}
export  const playlist = (params) =>{
    return axios.get(`/playlist/detail?id=${params}`); 
}
export  const songUrl = (params) =>{
    return axios.post("/song/url",params); 
}
export  const songlyric = (params) =>{
    return axios.get(`/lyric?id=${params}`);  
}