<template>
    <div>
        <div v-if='mapels==null' class="text-center my-2 m-5 p-5">
            <b-spinner class="align-middle" type='grow'></b-spinner>
            <strong>Loading...</strong>
        </div> 
        <b-table 
        v-else 
        striped
        reaponsive
        hover
        :fields="column"
        :sort-by.sync='sortBy'
        :sort-desc.sync='sortDesc'
        :items="mapels"
                                
        >
            <template slot="nomor" slot-scope="row">
                <div width="4px">
                    {{row.index+1}}   
                </div>
            </template>
            <template slot="action" slot-scope="row">
                <div class="text-center" @mouseover="index=row.index+1"> 
                    <b-button v-b-modal.modal-edit-mapel variant="success" class="ml-2" @click="edit">Edit</b-button>
                    <b-button v-b-modal.modal-delete-mapel variant="danger" class="ml-2" @click="deleteMapel">Delete</b-button>
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
        mapels : Array,
    },
    data() {
      return {
        sortBy:"nis",
        sortDesc: false,
        sortDirection :'asc',
        ai: null,
        index:Number,
        id:'1223',
        column:[
          {key : 'nomor', label : '#'},
          {key : 'namaMapel', label:'Nama', sortable:true},
          {key : 'action' , label: 'Action', class:['text-center']}
        ],
      }
    },
    computed: {

    },
    methods: {
        edit(){
            if(this.index){
                let dataEdit = {
                id : this.mapels[this.index-1].id,
                namaMapel : this.mapels[this.index-1].namaMapel,
            }
            this.$emit('edit',dataEdit)
            }
        },
        deleteMapel() {
            this.$bvModal.msgBoxConfirm('Apakah anda yakin?', {
            title: 'Hapus '+this.mapels[this.index-1].namaMapel,
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
                    .delete(apiUrl()+'mapel/'+this.mapels[this.index-1].id)
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
    mounted(){
    },
}}
</script>
<style>
  .width-img{
    width: 100px;
    height: 0px;
    padding: 0px;
    margin: 0px;
  }
</style>