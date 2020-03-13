import axios from 'axios'
export  const homeBanner = (params) =>{
    return axios.get("/banner",params); 
}
export  const homeRecommend = (params) =>{
    return axios.get("/personalized",params); 
}
