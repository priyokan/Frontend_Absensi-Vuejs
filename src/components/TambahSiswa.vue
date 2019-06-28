<template>
    <div>
        <b-button v-b-modal.modal-tambah-siswa variant="primary">Tambahkan siswa baru</b-button>

        <b-modal id="modal-tambah-siswa" centered title="Tambah siswa baru" @ok='submit'>
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
                placeholder="Masukan nama..."
                ></b-form-input>
            </b-form-group>

            <b-form-group id="group-alamat" label="Alamat:" label-for="alamat">
                <b-form-input
                id="alamat"
                v-model="form.alamat"
                required
                placeholder="Masukan alamat..."
                ></b-form-input>
            </b-form-group>

            <b-form-group id="group-kelas" label="Kelas:" label-for="kelas">
                <b-form-select
                id="kelas"
                v-model="form.kelas"
                :options="kelas"
                required
                ></b-form-select>
            </b-form-group>

            <b-form-group id="group-kelas" label="Kelas:" label-for="kelas">
                <b-form-file
                placeholder="pilih gambar"
                @change='imgSelector'
                accept="image/*"
                ></b-form-file>
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
                alamat:'',
                kelas:'',
                tglMasuk:'',
                tglKeluar:'',
                imgSiswa:'',
            },
            kelas:['X','XI','XII'],
            show:true,
        }
    },
    methods: {
        imgSelector(e){
            var file = e.target.files[0];
            this.form.imgSiswa = file
        },
        submit(evt){
                var fd = new FormData();
                fd.append('nama',this.form.nama)
                fd.append('alamat',this.form.alamat)
                fd.append('kelas',this.form.kelas)
                fd.append('tglMasuk',thn +'-'+ bln +'-'+ tgl)
                fd.append('imgSiswa', this.form.imgSiswa)
                const config = { headers: { 'Content-Type': 'multipart/form-data' } };

                Axios
                .post(apiUrl()+'siswa',fd,config)
                this.form.nama = null
                this.form.alamat=null
                this.form.kelas=null
                this.form.imgSiswa=null
            
        
         }
    },
    mounted() {
        // console.log(this.nis)
    },

}
</script>