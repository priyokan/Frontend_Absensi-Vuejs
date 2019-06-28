<template>
    <div>
        <!-- <b-button v-b-modal.modal-edit-siswa variant="success">Edit</b-button> -->

        <b-modal id="modal-edit-mapel" centered title="Edit mapel" @ok='submit'>
            <div>
            <b-form v-if="show">
                {{dataMapel.id}}
            <b-form-group
                id="group-nama"
                label="Nama:"
                label-for="nama"
                >
                <b-form-input
                id="nama"
                v-model="form.namaMapel"
                type="text"
                required
                :placeholder="dataMapel.namaMapel"
                ></b-form-input>
            </b-form-group>

            </b-form>
        </div>
        </b-modal>
    </div>

</template>
<script>
import Axios from 'axios';
import {apiUrl} from '../main'
import FormData from 'form-data'

export default {
    props: {
        dataMapel:Object,
    },
    data() {
        return {
            form:{
                namaMapel:'',
            },
            show:true,
        }
    },
    computed: {

    },
    methods: {
        submit(evt){
            var fd = new FormData();
            if(this.form.namaMapel){
                fd.append('namaMapel',this.form.namaMapel)
            }else{
                fd.append('namaMapel',this.dataMapel.namaMapl)
            }

            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            Axios
             .put(apiUrl()+'mapel/'+this.dataMapel.id,fd,config)
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });   
            this.form.nama = null
            
         }
    },
    mounted() {

    },

}
</script>