<template>
    <div>
        <b-modal id="modal-edit-kelas" centered title="Edit kelas" @ok='submit'>
            <div>
            <b-form v-if="show">

            <b-form-group id="group-kelas" label="Kelas:" label-for="kelas">
                <b-form-select
                id="kelas"
                v-model="form.kelas"
                :options='kelas'
                required
                >
                    <option :value="null">{{dataKelas.kelas}}</option>
                </b-form-select>
            </b-form-group>
            
            <b-form-group id="group-jurusan" label="Jurusan:" label-for="jurusan">
                <b-form-select
                id="jurusan"
                v-model="form.jurusan"
                :options="Jurusans"
                required
                >
                    <option :value="null">{{dataKelas.jurusan}}</option>
                </b-form-select>
            </b-form-group>
            <h6 style="color:grey;cursor:pointer" @click='togleTambahJurusan'>+ Tambah jurusan baru</h6>
                <b-form-input
                v-if="formTambahJurusan"
                id="jurusan"
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
        kelass:Array,
        dataKelas:Object,
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
        submit(evt){
            var fd = new FormData();
            if(this.form.kelas){
                fd.append('namaKelas',this.form.kelas)
            }else{
                fd.append('namaKelas',this.dataKelas.kelas)
            }

            if(this.form.jurusan){
                fd.append('namaJurusan',this.form.jurusan)
            }else{
                fd.append('namaJurusan',this.dataKelas.jurusan)
            }

            
            if(this.form.nomor){
                fd.append('nomorJurusan',this.form.nomor)
            }else{
                fd.append('nomorJurusan',this.dataKelas.nomor)
            }
            // }else{
            //     fd.append('imgSiswa',this.dataSiswa.imgSiswa)
            // }
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };

                Axios
                .put(apiUrl()+'kelas/'+this.dataKelas.id,fd,config)
                this.form.kelas = null
                this.form.jurusan=null
                this.form.nomor=null       
         }
    },
    computed: {
        
    },
    mounted() {
        const cariJurusan = setInterval(()=>{
            var def = this.dataKelas.jurusan
            let Jurusans= new Set();
                if(this.kelass){
                    this.kelass.forEach(el=> {  
                        if(el.namaJurusan != def){
                            Jurusans.add(el.namaJurusan)    
                        }
                    });     
                    this.Jurusans = Array.from(Jurusans)
                }                                    
            },500)
            this.form.nomor = this.dataKelas.nomor  
    },

}
</script>