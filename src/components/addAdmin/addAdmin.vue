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

                <b-form-group>
                    <div style="display:inline; float:left;width:50%" class="mr-2">
                    <b-form-input
                    id="input-first"
                    v-model="form.first"
                    required
                    placeholder="nama depan..."
                    style="display:inline; float:left;width:50%"
                    ></b-form-input>
                    </div>

                    <b-form-input
                    id="input-last"
                    v-model="form.last"
                    required
                    placeholder="nama belakang..."
                    ></b-form-input>
                </b-form-group>

                <b-form-group>
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