<template>
    <div>
        <b-button v-b-modal.modal-tambah-kelas variant="primary">Tambahkan kelas baru</b-button>

        <b-modal id="modal-tambah-kelas" centered title="Tambah kelas baru" @ok='submit'>
            <div>
            <b-form v-if="show">

            <b-form-group id="group-kelas" label="Kelas:" label-for="kelas">
                <b-form-select
                id="kelas"
                v-model="form.kelas"
                :options="kelas"
                required
                >
                    <option :value="null" disabled>Pilih kelas...</option>
                </b-form-select>
            </b-form-group>
            
            <b-form-group id="group-jurusan" label="Jurusan:" label-for="jurusan">
                <b-form-select
                id="jurusan"
                v-model="form.jurusan"
                :options="Jurusans"
                required
                >                
                    <option :value="null" disabled>Pilih jurusan...</option>
                </b-form-select>
            </b-form-group>
            <h6 style="color:grey;cursor:pointer" @click='togleTambahJurusan'>+ Tambah jurusan baru</h6>
                <b-form-input
                v-if="formTambahJurusan"
                id="jurusan"
                placeholder="Masukan nama jurusan"
                v-model="form.jurusan"  
                ></b-form-input>

            <b-form-group id="group-nomor" label="Nomor:" label-for="nomor">
                <b-form-input 
                id='nomor'
                v-model="form.nomor"
                type="number"
                required
                placeholder="masukan nomor jurusan...">

                </b-form-input>
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
        kelass: Array,
    },
    data() {
        return {
            form:{
                kelas:null,
                jurusan:null,
                nomor:null,
            },
            kelas:['X','XI','XII'],
            Jurusans:[],
            formTambahJurusan:false,
            show:true,
        }
    },
    methods: {
        togleTambahJurusan(){
            this.formTambahJurusan = !this.formTambahJurusan
        },
        imgSelector(e){
            var file = e.target.files[0];
            this.form.imgSiswa = file
        },
        submit(evt){
                var fd = new FormData();
                fd.append('namaKelas',this.form.kelas)
                fd.append('namaJurusan',this.form.jurusan)
                fd.append('nomorJurusan',this.form.nomor)
                const config = { headers: { 'Content-Type': 'multipart/form-data' } };

                Axios
                .post(apiUrl()+'kelas',fd,config)
                this.form.kelas = null
                this.form.jurusan=null
                this.form.nomor=null       
         }
    },
    computed: {
        
    },
    mounted() {
        const cariJurusan = setInterval(()=>{
            let Jurusans= new Set();
                if(this.kelass){
                    this.kelass.forEach(el=> {  
                        Jurusans.add(el.namaJurusan)    
                    });     
                    this.Jurusans = Array.from(Jurusans)
                }                        
            },500)

    },

}
</script>