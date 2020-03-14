import {Login} from '../../api/api'
import {setLocalstorage} from '../../util/util'
const login = {
    state:{
        userToken:'' || localStorage.getItem('token'), //用户token
        profile: '' || localStorage.getItem('profile'), // 用户信息
        bindings: '' || localStorage.getItem('bindings'), // 用户信息
    },
    mutations:{
        SET_USERTOKEN(state,token){
            state.userToken = token 
        },
        SET_PROFILE(state,profile){
            state.profile = profile
        },
        SET_BINDINGS(state,bindings){
            state.bindings = bindings
        }
    },
    actions:{
        async LoginToGetInf({commit},data){
        const res =  await  Login(data);
        commit('SET_USERTOKEN',res.data.token)
        commit('SET_PROFILE',res.data.profile)
        commit('SET_BINDINGS',res.data.bindings)
        setLocalstorage(['userToken','profile','bindings'],[res.data.token,res.data.profile,res.data.bindings])
        console.log(res)
        return res.data 
        }
    }
}
export default login