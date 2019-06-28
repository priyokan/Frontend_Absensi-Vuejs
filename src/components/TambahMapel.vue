<template>
    <div>
        <b-button v-b-modal.modal-tambah-mapel variant="primary">Tambahkan mapel baru</b-button>

        <b-modal id="modal-tambah-mapel" centered title="Tambah mapel baru" @ok='submit'>
            <div>
            <b-form v-if="show">
            <b-form-group
                id="group-nama"
                label="Nama:"
                label-for="nama"
                >
                <b-form-input
                id="nama"
                v-model="form.nama"
                type="text"
                required
                placeholder="Masukan nama mapel..."
                ></b-form-input>
            </b-form-group>
            </b-form>
        </div>
        </b-modal>
    </div>

</template>
<script>
import {apiUrl} from '../main'
import Axios from 'axios';
import FormData from 'form-data'
let d = new Date()
const tgl = d.getDate().toString()
const bln = d.getMonth()+1
const thn = d.getFullYear().toString()

export default {
    props: {
    },
    data() {
        return {
            form:{
                nama:'',
            },
            show:true,
        }
    },
    methods: {
        submit(evt){
                var fd = new FormData();
                fd.append('namaMapel',this.form.nama)

                const config = { headers: { 'Content-Type': 'multipart/form-data' } };

                Axios
                .post(apiUrl()+'mapel',fd,config)
                this.form.nama = null                    
         }
    },
    mounted() {
        // console.log(this.nis)
    },

}
</script>