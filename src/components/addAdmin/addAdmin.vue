<template>
    <div id="addAdmin">
        <div class="bg">
            <div class="bg-kcl"></div>
        </div>
        <b-container>
            <div class="w-form"> 
                <b-form v-if="show" @submit="submit" class="mt-5 text-left">
                    <b-form-group label='Email'>
                        <b-form-input
                        id="input-email"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Masukan email..."
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group label='Nama'>
                    <div style="width:49%; " > 
                        <b-form-input
                        id="input-first"
                        v-model="form.first"
                        required
                        placeholder="nama depan..."
                        ></b-form-input>                  
                    </div>
                    <div style="position:relative;top:-29px;float:right;width:49%">
                    <b-form-input
                        id="input-last"
                        v-model="form.last"
                        required
                        placeholder="nama belakang..."
                        ></b-form-input>
                    </div>
                    </b-form-group>

                    <b-form-group 
                    style="position:relative;top:-28px;"
                    label='Password'>
                        <b-form-input
                        id="input-password"
                        v-model="form.password"
                        type='password'
                        required
                        placeholder="Password..."
                        ></b-form-input>
                        <p v-show="form.password&&form.password.length<8" class='text-danger text-right' style="text-shadow:0px 1px 4px #2d2d2d;position:fixed;width:330px">minimal 8 character</p>
                    </b-form-group>

                    <b-form-group 
                    style="position:relative;top:-28px;"
                    label='Konfirmasi Password'>
                        <b-form-input
                        id="input-confirmpassword"
                        v-model="form.confirmPassword"
                        type='password'
                        required
                        placeholder="Password..."
                        >
                        </b-form-input>
                        <div  v-show="form.confirmPassword"> 
                            <img class="cnf-stat" v-show="form.password!=form.confirmPassword" src="../../assets/salah.svg" alt="">
                            <img class="cnf-stat" v-show="form.password==form.confirmPassword" src="../../assets/benar.svg" alt="">
                        </div>
                    </b-form-group>
                    <div class='text-center'>
                        <b-button type="submit"  variant="primary">daftarkan</b-button>
                    </div>
                    </b-form>
                </div>
        </b-container>    
    </div>
</template>
<script>
import {apiUrl} from '../../main'
import Axios from 'axios';
import FormData from 'form-data'
export default {
    data() {
        return {
            form:{
                email:null,
                first:null,
                last:null,
                password:null,
                confirmPassword:null,
            },
            show:true,
        }
    },
    methods:{
        submit(ev){
            ev.preventDefault();
            
            if(this.form.password==this.form.confirmPassword){
                var fd = new FormData();
                fd.append('email',this.form.email)
                fd.append('first_name',this.form.first)
                fd.append('last_name', this.form.last)
                fd.append('password',this.form.password)
                const config = { headers: { 'Content-Type': 'multipart/form-data' } };

                Axios
                .post(apiUrl()+'signup',fd,config)
                .then((result)=>{
                    console.log(result)
                })
                this.form.email = null
                this.form.first=null
                this.form.last=null  
                this.form.password=null
                this.form.confirmPassword=null 
            }
        },
    }
}
</script>
<style>
#addAdmin{

}
#addAdmin .bg{
    background: linear-gradient(rgb(48, 148, 131),rgb(26, 54, 73));
    width: 100vw;
    height: 50vw;
    position: absolute;
    top: -33px;
    z-index:-100 ;    
}
.bg .bg-kcl{
    background: url('../../assets/admin.jpg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0,8;
    width:80%;
    height: 60%;
    position: relative;
    top: 30%;
}
#addAdmin .w-form{
    position: absolute;
    right: 200px;
    width: 400px;
    padding: 30px;
    height: 450px;
    background-color: rgb(255, 255, 255);
}
.cnf-stat{
     position: absolute;
     height: 15px;
     width: 15px;
     float: right;
     right: 10px;
     top: 30px;
}
#addAdmin .col-form-label{
    color: rgb(0, 141, 141);
    font-weight: 500;
}
</style>
