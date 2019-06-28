<template>
    <div>
        <!-- <b-button v-b-modal.modal-edit-siswa variant="success">Edit</b-button> -->

        <b-modal id="modal-edit-guru" centered title="Edit guru" @ok='submit'>
            <div>
            <b-form v-if="show">
                {{dataEdit.id}}
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
                :placeholder="dataEdit.nama"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="group-alamat" label="Alamat:" label-for="alamat">
                <b-form-input
                id="alamat"
                v-model="form.alamat"
                required
                :placeholder="dataEdit.alamat"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="group-photo" label="Photo:" label-for="photo">
                <img v-if="!form.imgGuru" :src='dataEdit.imgGuru' style="width:90px;height:120px" :alt="dataEdit.imgGuru">
                <img v-else :src='form.imgGuru.name' style="width:90px;height:120px" :alt="form.imgGuru.name">
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
        dataEdit:Object,
    },
    data() {
        return {
            form:{
                nama:'',
                alamat:'',
                kelas:'',
                tglMasuk:'',
                tglKeluar:'',
                imgGuru:'',
            },
            show:true,
            nip:this.nip
        }
    },
    computed: {

    },
    methods: {
        imgSelector(e){
            var file = e.target.files[0];
            this.form.imgGuru = file
        },
        submit(evt){
            var fd = new FormData();
            if(this.form.nama){
                fd.append('nama',this.form.nama)
            }else{
                fd.append('nama',this.dataEdit.nama)
            }

            if(this.form.alamat){
                fd.append('alamat',this.form.alamat)
            }else{
                fd.append('alamat',this.dataEdit.alamat)
            }

            
            if(this.form.imgGuru){
                fd.append('imgGuru',this.form.imgGuru)
            }else{
                fd.append('imgGuru',this.dataEdit.imgGuru)
            }
            // }else{
            //     fd.append('imgSiswa',this.dataSiswa.imgSiswa)
            // }
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };

            Axios
             .put(apiUrl()+'guru/'+this.dataEdit.id,fd,config)
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });   
            this.form.nama = null
            this.form.alamat=null
            this.form.kelas=null
            this.form.imgGuru=null
            
         }
    },
    mounted() {

    },

}
</script>