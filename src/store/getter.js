const getter={
    userToken:state=> state.login.userToken, // login Token
    profile: state => state.login.profile,
    bindings: state => state.login.bindings,

}
export default getter