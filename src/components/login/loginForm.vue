<template>
    <div>
                <div>                    
                    <b-form-group id="group-username">
                        <h3 class="">@</h3>
                        <b-form-input
                        id="username"
                        v-model="form.username"
                        type="email"
                        class="input username"
                        required
                        placeholder="Email..."
                        ></b-form-input>
                    </b-form-group>                    
                    <b-form-group id="group-password">
                        <div class="pokok">
                        <img class="img" style="width: 31px;" src="../../assets/password.svg" alt="">
                        <img class='eye' v-show="pwType=='text'" src="../../assets/slash.svg" alt="">
                        <img class='eye' @click="showPass" src="../../assets/eye.svg" alt="">
                        </div>
                        <b-form-input
                        id="password"
                        v-model="form.password"
                        :type="pwType"
                        class="input password"
                        required
                        placeholder="Password..."
                        ></b-form-input>
                    </b-form-group>
                    <b-alert show variant="danger" v-show="alert"> {{alert}} tidak boleh kosong </b-alert>
                    <b-alert show variant="danger" v-show="salah">{{salah}}</b-alert>
                    <b-form-checkbox
                        id="cookie"
                        v-model="cookie"
                        value=true
                        unchecked-value=false
                        class='text-left m-2'
                        >
                        Ingat saya
                    </b-form-checkbox>
                    <b-button variant="primary" class="mt-4 pt-4" pill @click="submit">Login</b-button>
                </div>
            </div>
</template>
<script>
import Axios from 'axios';
import {apiUrl} from '../../main'
export default {
    data() {
        return {
            form:{
                username:null,
                password:null,
            },
            pwType:'password',
            cookie:false,
            alert:'',
            salah:null,
        }
    },
    methods: {
        
        showPass(){
            if(this.pwType =='password'){
                this.pwType ='text'
            }else if(this.pwType =='text'){
                this.pwType ='password'
            }
            return
        },
        submit(){
            let ress
            let form = {
                email : this.form.username,
                password : this.form.password
            }      
            this.alert=''
            this.salah=''
            if(form.email&&form.password){  
                Axios
                .post(apiUrl()+'signin',form)
                .then((result)=>{
                    
                    if(result.data.results){
                        console.log(result.data.results)
                        if(result.data.results.status){                       
                            this.$router.push('/sekolah/home')
                        }else{
                            this.salah = 'Username atau password salah'
                        }
                    }
                })
            }else{
                if(!form.email){
                    this.alert += ' Email'
                }
                if(!form.password){
                    this.alert += ' Password'
                }
            }
        }
    },
}
</script>
<style>
#login{
    background-color: #eeeeee;
    height: 45vw;
    color: rgb(126, 126, 126);
    padding: 100px
}
#login .input{
    border: none;
    border-bottom: 1px solid #c8c8c8;
    margin-top:-10px;
    padding-left:30px;
    padding-right:30px;
}
 #login .img{
    position: relative;
    top: 23px;
    left: -47%;
    height: 35px;
    width: 30px;
}
 #login .eye{
     position: absolute;
     height: 30px;
     width: 30px;
     float: right;
     left: 185px;
     top: 15px;
 }
.pokok{
    position: relative;
    display: inline;
    height: 30px;
    width: 100%;
}

#login .btn{
    width: 100%;
    height: 50px;
}

</style>
