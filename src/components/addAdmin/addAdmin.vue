<template>
    <div>
        <b-container>
            <b-form v-if="show">
                <b-form-group>
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

                <b-form-group style="position:relative;top:-28px;">
                    <b-form-input
                    id="input-password"
                    v-model="form.password"
                    required
                    placeholder="Password..."
                    ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
                </b-form>
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
            },
            show:true,
        }
    },
}
</script>