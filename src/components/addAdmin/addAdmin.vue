<template>
    <div id="addAdmin">
        <div class="bg">
            <div class="bg-kcl"></div>
        </div>
        <b-container>
            <div class="w-form"> 
                <b-form v-if="show" class="mt-5 text-left">
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
                    <div style="position:relative;top:-28px;float:right;width:49%">
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
                        required
                        placeholder="Password..."
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group 
                    style="position:relative;top:-28px;"
                    label='Konfirmasi Password'>
                        <b-form-input
                        id="input-password"
                        v-model="form.confirmPassword"
                        required
                        placeholder="Password..."
                        ></b-form-input>
                    </b-form-group>
                    <div class='text-center'>
                        <b-button type="submit"  variant="primary">Submit</b-button>
                    </div>
                    </b-form>
                </div>
        </b-container>    
    </div>
</template>
<script>
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
    background-size: contain;
    opacity: 0,8;
    width:90%;
    height: 60%;
    position: relative;
    top: 30%;
}
#addAdmin .w-form{
    position: relative;
    right: -600px;
    width: 400px;
    padding: 30px;
    height: 450px;
    background-color: rgb(255, 255, 255);
}
</style>
