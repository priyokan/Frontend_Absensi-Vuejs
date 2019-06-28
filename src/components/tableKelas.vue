<template>
    <div>
        <div v-if='kelass==null' class="text-center my-2 m-5 p-5">
            <b-spinner class="align-middle" type='grow'></b-spinner>
            <strong>Loading...</strong>
        </div> 
        <b-table 
        v-else 
        striped
        reaponsive
        hover
        :fields='column'
        :sort-by.sync='sortBy'
        :sort-desc.sync='sortDesc'
        :items="kelass"
                                
        >
            <template slot="nomor" slot-scope="row">
                <div width="4px">
                    {{row.index+1}}   
                </div>
            </template>

            <template slot="imgSiswa" slot-scope="row">
                <div> 
                    <img :src="row.value" alt="" srcset="" style="width:60%; margin:0px; padding:0px ">
                </div>
            </template>
            <template slot="action" slot-scope="row">
                <div class="text-center" @mouseover="index=row.index+1"> 
                    <b-button v-b-modal.modal-edit-kelas variant="success" @click="edit">Edit</b-button>
                    <b-button v-b-modal.modal-delete-mapel variant="danger" class="ml-2" @click="deleteKelas">Delete</b-button>
                </div>
            </template>
        </b-table>

    </div>
</template>

<script>

import Axios from 'axios';
import {apiUrl} from '../main'
const axios = require ('axios');
export default {
    component:{
    },
    props:{
        kelass : Array,
    },
    data() {
      return {
        sortBy:"nis",
        sortDesc: false,
        sortDirection :'asc',
        ai: null,
        filters:{
            kelas:this.kelas,
        },
        index:Number,
        nis:'1223',
        column:[
          {key : 'nomor', label : '#'},
          {key : 'namaKelas', label:'Kelas', sortable:true},
          {key : 'namaJurusan', label:'Jurusan'},
          {key : 'nomorJurusan', label:'nomor'},
          {key : 'action' , label: 'Action', class:['text-center']}
        ],
      }
    },
    computed: {
        KelasFilter () {
            if(this.kelas){
                const filtered = this.siswas.filter(item => {
                return Object.keys(this.filters).every(key =>
                        String(item[key])==(this.filters[key]))
                })
                return filtered.length > 0 ? filtered : [{
                    kelas: '',
                }]
            }return this.siswas
    }
    },
    methods: {
        edit(){
            if(this.index){
                let dataEdit = {
                id : this.kelass[this.index-1].id,
                kelas : this.kelass[this.index-1].namaKelas,
                jurusan : this.kelass[this.index-1].namaJurusan,
                nomor : this.kelass[this.index-1].nomorJurusan,
            }
            this.$emit('edit',dataEdit)
            }
        },
        deleteKelas() {
            this.$bvModal.msgBoxConfirm('Apakah anda yakin?', {
            title: 'Hapus '+this.kelass[this.index-1].namaKelas+' '+this.kelass[this.index-1].namaJurusan+'-'+this.kelass[this.index-1].nomorJurusan,
            size: 'sm',
            buttonSize: '',
            okVariant: 'danger',
            okTitle: 'Ya',
            cancelTitle: 'Tidak',
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true
            })
            .then(value => {            
                if (value) {
                Axios
                    .delete(apiUrl()+'kelas/'+this.kelass[this.index-1].id)
                    .catch(function (error) {
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });   
                }
            })
            .catch(err => {
                // An error occurred
            })     
    },
    },
    mounted(){
    },
}
</script>
<style>
  .width-img{
    width: 100px;
    height: 0px;
    padding: 0px;
    margin: 0px;
  }
</style>