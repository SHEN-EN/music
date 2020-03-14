<template>
  <section class="login-wrap">
    <div class="login-wrap-head">
        <i class="iconfont icon-back"></i>
        <div>手机号码登陆</div>  
    </div>
    <form action @submit="tryToLogin" >
      <div :class="['phone-number-container',fouce?'fouce':'']">
        <label>
          <i class="iconfont icon-phone"></i>
          <span class="country-code">+86</span>
        </label>
        <input
          class="tel-input"
          type="tel"
          v-model="tel"
          required
          autofocus
          pattern="^1[34578]\d{9}"
        @focus="focusfns"
        @blur="blurfns"
        >
      </div>
      <div :class="['password-container',!fouce?'fouce':'']">
        <label for>
          <i class="iconfont icon-password"></i>
        </label>
        <input
          class="password-input"
          type="password"
          placeholder="请输入密码"
          v-model="password"
          required
          @focus="focusfns"
        @blur="blurfns"
        >
      </div>
      <div class="login-btn-container">
        <input class="login-btn" type="submit" value="登录">
      </div>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      tel:'',
      password:'',
      fouce:true
    };
  },
  methods: {
    ...mapActions({
        'LoginToGetInf':'LoginToGetInf'
    }),
      focusfns(e){
          if(e.target.type == 'tel'){
              this.fouce=true
          }else{
              this.fouce=false
          }  
      },
      blurfns(){
          this.fouce=false
      },
     async tryToLogin(e){
        let params={
            phone:this.tel,
            password:this.password
        }  
        let res =  await this.LoginToGetInf(params);
            if (res.code == 200) {
                this.$router.push('/Home')
            }else{
                e.preventDefault(); //禁止表单刷新
                alert(res.msg)
            }   
      }
  },
  created() {
      console.log()
  },
  computed: {
 
  },
};
</script>

<style scoped lang='less'>
.login-wrap {
  .login-wrap-head{
        display: flex;
        justify-content: center;
        align-items: center;
      i{
        position: absolute;
        color: #fff;
        font-size: .24rem;
        top: .12rem;
        left: .1rem;
      }
      div{
          font-size: .18rem;
          color:#fff;
      }
      height: .5rem;
      width: 100%;
      position: fixed;
      background: #d34339;
  }
  .phone-number-container,
  .password-container {
    position: relative;
    border-bottom: 1px solid #e4e4e4;
    padding: 0.05rem 0;
    margin: 0.2rem 0.2rem;
    margin-top: 0;
    transition: all .5s;
  }
  .fouce{
    border-bottom: 1px solid #d34339;
  }
  .tel-input,
  .password-input {
    font-size: 16px;
    margin-left: 0.1rem;
    border: none;
    outline-style: none;
  }
  .iconfont {
    font-size: 18px;
    color: gray;
  }
  .country-code {
    font-size: 16px;
    margin: 0 0.1rem;
  }
  .clean-btn {
    position: absolute;
    right: .05rem;
  }
  .login-btn-container {
    text-align: center;
    .login-btn {
      background: #d44439;
      color: #f1f1f1;
      border: none;
      width: 90%;
      height: 0.4rem;
      border-radius: 0.2rem;
      font-size: 16px;
    }
  }
}

</style>