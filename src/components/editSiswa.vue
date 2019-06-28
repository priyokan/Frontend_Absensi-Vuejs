<template>
    <div>
        <!-- <b-button v-b-modal.modal-edit-siswa variant="success">Edit</b-button> -->

        <b-modal id="modal-edit-siswa" centered title="Edit siswa" @ok='submit'>
            <div>
            <b-form v-if="show">
                {{dataSiswa.id}}
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
                :placeholder="dataSiswa.nama"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="group-alamat" label="Alamat:" label-for="alamat">
                <b-form-input
                id="alamat"
                v-model="form.alamat"
                required
                :placeholder="dataSiswa.alamat"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="group-photo" label="Photo:" label-for="photo">
                <img v-if="!form.imgSiswa" :src='dataSiswa.imgSiswa' style="width:90px;height:120px" :alt="dataSiswa.imgSiswa">
                <img v-else :src='form.imgSiswa.name' style="width:90px;height:120px" :alt="form.imgSiswa.name">
                <b-form-file
                id='photo'
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
import Axios from 'axios';
import {apiUrl} from '../main'
import FormData from 'form-data'

export default {
    props: {
        dataSiswa:Object,
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
            show:true,
            nis:this.nis
        }
    },
    computed: {

    },
    methods: {
        imgSelector(e){
            var file = e.target.files[0];
            this.form.imgSiswa = file
        },
        submit(evt){
            var fd = new FormData();
            if(this.form.nama){
                fd.append('nama',this.form.nama)
            }else{
                fd.append('nama',this.dataSiswa.nama)
            }

            if(this.form.alamat){
                fd.append('alamat',this.form.alamat)
            }else{
                fd.append('alamat',this.dataSiswa.alamat)
            }

            fd.append('kelas',this.dataSiswa.kelas)

            
            if(this.form.imgSiswa){
                fd.append('imgSiswa',this.form.imgSiswa)
            }else{
                fd.append('imgSiswa',this.dataSiswa.imgSiswa)
            }
            // }else{
            //     fd.append('imgSiswa',this.dataSiswa.imgSiswa)
            // }
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };

            Axios
             .put(apiUrl()+'siswa/'+this.dataSiswa.id,fd,config)
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });   
            this.form.nama = null
            this.form.alamat=null
            this.form.kelas=null
            this.form.imgSiswa=null
            
         }
    },
    mounted() {

    },

}
</script>